"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  prompt: () => prompt
});
module.exports = __toCommonJS(index_exports);

// src/environment.ts
var import_handlebars2 = __toESM(require("handlebars"));

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
var import_handlebars = require("handlebars");
function json(serializable, options) {
  return new import_handlebars.SafeString(JSON.stringify(serializable, null, options.hash.indent || 0));
}
function role(role2) {
  return new import_handlebars.SafeString(`<<<prompt:role:${role2}>>>`);
}
function history() {
  return new import_handlebars.SafeString("<<<prompt:history>>>");
}
function section(name) {
  return new import_handlebars.SafeString(`<<<prompt:section ${name}>>>`);
}
function media(options) {
  return new import_handlebars.SafeString(
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
var import_yaml = require("yaml");
var FRONTMATTER_REGEX = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
function parseDocument(source) {
  const match = source.match(FRONTMATTER_REGEX);
  if (match) {
    const [, frontmatter, content] = match;
    try {
      const metadata = (0, import_yaml.parse)(frontmatter);
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
    this.handlebars = import_handlebars2.default.noConflict();
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  prompt
});
