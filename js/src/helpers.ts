import { SafeString } from "handlebars";

export function json(serializable: any, options: { hash: { indent?: number } }) {
  return new SafeString(JSON.stringify(serializable, null, options.hash.indent || 0));
}

export function role(role: string) {
  return new SafeString(`<<<prompt:role:${role}>>>`);
}

export function history() {
  return new SafeString("<<<prompt:history>>>");
}

export function section(name: string) {
  return new SafeString(`<<<prompt:section ${name}>>>`);
}

export function media(options: Handlebars.HelperOptions) {
  return new SafeString(
    `<<<prompt:media:url ${options.hash.url}${
      options.hash.contentType ? ` ${options.hash.contentType}` : ""
    }>>>`
  );
}

export function ifEquals(this: any, arg1: any, arg2: any, options: Handlebars.HelperOptions) {
  return arg1 == arg2 ? options.fn(this) : options.inverse(this);
}

export function unlessEquals(this: any, arg1: any, arg2: any, options: Handlebars.HelperOptions) {
  return arg1 != arg2 ? options.fn(this) : options.inverse(this);
}
