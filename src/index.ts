import { PromptEnvironment, PromptOptions } from "./environment.js";
export * from "./types.js";

export function prompt(options?: PromptOptions): PromptEnvironment {
  return new PromptEnvironment(options);
}
