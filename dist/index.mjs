var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/environment.ts
import Handlebars from "handlebars";

// src/helpers.ts
var helpers_exports = {};
__export(helpers_exports, {
  history: () => history,
  ifEquals: () => ifEquals,
  json: () => json,
  media: () => media,
  role: () => role,
  section: () => section,
  unlessEquals: () => unlessEquals
});
import { SafeString } from "handlebars";
function json(serializable, options) {
  return new SafeString(JSON.stringify(serializable, null, options.hash.indent || 0));
}
function role(role2) {
  return new SafeString(`<<<prompt:role:${role2}>>>`);
}
function history() {
  return new SafeString("<<<prompt:history>>>");
}
function section(name) {
  return new SafeString(`<<<prompt:section ${name}>>>`);
}
function media(options) {
  return new SafeString(
    `<<<prompt:media:url ${options.hash.url}${options.hash.contentType ? ` ${options.hash.contentType}` : ""}>>>`
  );
}
function ifEquals(arg1, arg2, options) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
}
function unlessEquals(arg1, arg2, options) {
  return arg1 != arg2 ? options.fn(this) : options.inverse(this);
}

// src/parse.ts
import { parse } from "yaml";
var FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
function parseDocument(source) {
  const match = source.match(FRONTMATTER_REGEX);
  if (match) {
    const [, frontmatter, content] = match;
    try {
      const metadata = parse(frontmatter);
      return { metadata, template: content.trim() };
    } catch (error) {
      console.error("Error parsing YAML frontmatter:", error);
      return { metadata: {}, template: source.trim() };
    }
  }
  return { metadata: {}, template: source };
}
var ROLE_REGEX = /(<<<prompt:(?:role:[a-z]+|history))>>>/g;
function toMessages(renderedString, data, options) {
  let currentMessage = {
    role: "user",
    source: ""
  };
  const messageSources = [currentMessage];
  for (const piece of renderedString.split(ROLE_REGEX).filter((s) => s.trim() !== "")) {
    if (piece.startsWith("<<<prompt:role:")) {
      const role2 = piece.substring(18);
      if (currentMessage.source.trim()) {
        currentMessage = { role: role2, source: "" };
        messageSources.push(currentMessage);
      } else {
        currentMessage.role = role2;
      }
    } else if (piece.startsWith("<<<prompt:history")) {
      messageSources.push(
        ...data?.history?.map((m) => {
          return {
            ...m,
            metadata: { ...m.metadata || {}, purpose: "history" }
          };
        }) || []
      );
      currentMessage = { role: "model", source: "" };
      messageSources.push(currentMessage);
    } else {
      currentMessage.source += piece;
    }
  }
  const messages = messageSources.filter((ms) => ms.content || ms.source).map((m) => {
    const out = {
      role: m.role,
      content: m.content || toParts(m.source)
    };
    if (m.metadata) out.metadata = m.metadata;
    return out;
  });
  if (!data?.history || messages.find((m) => m.metadata?.purpose === "history")) return messages;
  return [...messages.slice(0, -1), ...data.history, messages.at(-1)];
}
var PART_REGEX = /(<<<prompt:(?:media:url|section).*?)>>>/g;
function toParts(source) {
  const parts = [];
  const pieces = source.split(PART_REGEX).filter((s) => s.trim() !== "");
  for (let i = 0; i < pieces.length; i++) {
    const piece = pieces[i];
    if (piece.startsWith("<<<prompt:media:")) {
      const [_, url, contentType] = piece.split(" ");
      const part = { media: { url } };
      if (contentType) part.media.contentType = contentType;
      parts.push(part);
    } else if (piece.startsWith("<<<prompt:section")) {
      const [_, sectionType] = piece.split(" ");
      parts.push({ metadata: { purpose: sectionType, pending: true } });
    } else {
      parts.push({ text: piece });
    }
  }
  const apart = { text: "foo" };
  return parts;
}

// src/environment.ts
var PromptEnvironment = class {
  handlebars;
  knownHelpers = {};
  constructor(options) {
    this.handlebars = Handlebars.noConflict();
    for (const key in helpers_exports) {
      this.knownHelpers[key] = true;
      this.handlebars.registerHelper(key, helpers_exports[key]);
    }
  }
  defineHelper(name, fn) {
    this.handlebars.registerHelper(name, fn);
    this.knownHelpers[name] = true;
    return this;
  }
  definePartial(name, source) {
    this.handlebars.registerPartial(name, source);
    return this;
  }
  parse(source) {
    return parseDocument(source);
  }
  render(source, data = {}, options) {
    return this.compile(source)(data, options);
  }
  mergeMetadata(base, ...merges) {
    for (let i = 1; i < merges.length; i++) {
      if (!merges[i]) continue;
      const config = base.config || {};
      base = { ...base, ...merges[i] };
      base.config = { ...config, ...merges[i]?.config || {} };
    }
    return base;
  }
  compile(source) {
    const { metadata: parsedMetadata, template } = this.parse(source);
    const renderString = this.handlebars.compile(template, {
      knownHelpers: this.knownHelpers,
      knownHelpersOnly: true
    });
    return (data, options) => {
      const metadata = { ...parsedMetadata, ...options };
      const renderedString = renderString(data.input, {
        data: {
          metadata: { prompt: metadata, context: data.context, history: data.history }
        }
      });
      return {
        ...this.mergeMetadata(parsedMetadata, options),
        messages: toMessages(renderedString, data, metadata)
      };
    };
  }
};

// src/index.ts
function prompt(options) {
  return new PromptEnvironment(options);
}
export {
  prompt
};
