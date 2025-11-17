import Handlebars from 'handlebars';

type Schema = Record<string, any>;
interface ToolDefinition {
    name: string;
    description?: string;
    inputSchema: Schema;
    outputSchema?: Schema;
}
type ToolArgument = string | ToolDefinition;
interface HasMetadata {
    /** Arbitrary metadata to be used by tooling or for informational purposes. */
    metadata?: Record<string, any>;
}
interface PromptMetadata<ModelConfig = Record<string, any>> extends HasMetadata {
    /** The name of the prompt. */
    name?: string;
    /** The variant name for the prompt. */
    variant?: string;
    /** The name of the model to use for this prompt, e.g. `vertexai/gemini-1.0-pro` */
    model?: string;
    /** Names of tools (registered separately) to allow use of in this prompt. */
    tools?: string[];
    /** Definitions of tools to allow use of in this prompt. */
    toolDefs?: ToolDefinition[];
    /** Model configuration. Not all models support all options. */
    config?: ModelConfig;
    /** Configuration for input variables. */
    input?: {
        /** Defines the default input variable values to use if none are provided. */
        default?: Record<string, any>;
        /** Schema definition for input variables. */
        schema?: Schema;
    };
    /** Defines the expected model output format. */
    output?: {
        /** Desired output format for this prompt. */
        format?: string | "json" | "text";
        /** Schema defining the output structure. */
        schema?: Schema;
    };
}
interface EmptyPart extends HasMetadata {
    text?: never;
    data?: never;
    media?: never;
    toolRequest?: never;
    toolResponse?: never;
}
type TextPart = Omit<EmptyPart, "text"> & {
    text: string;
};
type DataPart = Omit<EmptyPart, "data"> & {
    data: Record<string, any>;
};
type MediaPart = Omit<EmptyPart, "media"> & {
    media: {
        url: string;
        contentType?: string;
    };
};
type ToolRequestPart<Input = any> = Omit<EmptyPart, "toolRequest"> & {
    toolRequest: {
        name: string;
        input?: Input;
        ref?: string;
    };
};
type ToolResponsePart<Output = any> = Omit<EmptyPart, "toolResponse"> & {
    toolResponse: {
        name: string;
        output?: Output;
        ref?: string;
    };
};
type PendingPart = EmptyPart & {
    metadata: {
        pending: true;
        [key: string]: any;
    };
};
type Part = TextPart | DataPart | MediaPart | ToolRequestPart | ToolResponsePart | PendingPart;
interface Message extends HasMetadata {
    role: "user" | "model" | "tool" | "system";
    content: Part[];
    metadata?: Record<string, any>;
}
interface Document extends HasMetadata {
    content: Part[];
}
interface DataArgument<Variables = any, State = any> {
    input?: Variables;
    context?: Document[];
    state?: State;
    history?: Message[];
}

interface PromptOptions {
}
declare class PromptEnvironment {
    private handlebars;
    private knownHelpers;
    constructor(options?: PromptOptions);
    defineHelper(name: string, fn: Handlebars.HelperDelegate): this;
    definePartial(name: string, source: string): this;
    parse<ModelConfig = Record<string, any>>(source: string): {
        metadata: PromptMetadata<ModelConfig>;
        template: string;
    };
    render<Variables = Record<string, any>, ModelConfig = Record<string, any>>(source: string, data?: DataArgument<Variables>, options?: PromptMetadata<ModelConfig>): {
        messages: Message[];
        name?: string;
        variant?: string;
        model?: string;
        tools?: string[];
        toolDefs?: ToolDefinition[];
        config?: ModelConfig | undefined;
        input?: {
            default?: Record<string, any>;
            schema?: Schema;
        };
        output?: {
            format?: string | "json" | "text";
            schema?: Schema;
        };
        metadata?: Record<string, any>;
    };
    private mergeMetadata;
    compile<Variables = any, ModelConfig = Record<string, any>>(source: string): (data: DataArgument, options?: PromptMetadata<ModelConfig>) => {
        messages: Message[];
        name?: string;
        variant?: string;
        model?: string;
        tools?: string[];
        toolDefs?: ToolDefinition[];
        config?: ModelConfig | undefined;
        input?: {
            default?: Record<string, any>;
            schema?: Schema;
        };
        output?: {
            format?: string | "json" | "text";
            schema?: Schema;
        };
        metadata?: Record<string, any>;
    };
}

declare function prompt(options?: PromptOptions): PromptEnvironment;

export { type DataArgument, type DataPart, type Document, type MediaPart, type Message, type Part, type PendingPart, type PromptMetadata, type Schema, type TextPart, type ToolArgument, type ToolDefinition, type ToolRequestPart, type ToolResponsePart, prompt };
