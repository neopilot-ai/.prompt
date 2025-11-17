import{$ as o,c as n}from"./_astro_assets.C3TYO3Ji.js";import{F as c}from"./utils.B81hyvOl.js";import"./astro/assets-service.CrlEOsaO.js";import"./index.CVpbhN_F.js";const s={title:"Prompt Frontmatter",sort_order:1};function m(){return[{depth:2,slug:"structure",text:"Structure"},{depth:2,slug:"full-example",text:"Full Example"},{depth:2,slug:"available-fields",text:"Available Fields"},{depth:3,slug:"name",text:"name"},{depth:3,slug:"variant",text:"variant"},{depth:3,slug:"model",text:"model"},{depth:3,slug:"tools",text:"tools"},{depth:3,slug:"config",text:"config"},{depth:3,slug:"input",text:"input"},{depth:3,slug:"output",text:"output"},{depth:3,slug:"metadata",text:"metadata"}]}const u=!0;function r(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(c,{children:[n(e.p,{children:["The frontmatter in Prompt files contains metadata and configuration for the prompt. It is defined using YAML syntax at the beginning of the file, enclosed between triple dashes (",n(e.code,{children:"---"}),")."]}),`
`,n(e.h2,{id:"structure",children:"Structure"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#9CA0B0",fontStyle:"italic","--shiki-dark":"#6E738D","--shiki-dark-font-style":"italic"},children:"# Frontmatter content goes here"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line"}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Prompt template goes here."})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.p,{children:["All frontmatter fields are considered optional in a given ",n(e.code,{children:".prompt"})," file, as Prompt implementations may provide default values for any or all of them. If no frontmatter fields need to be specified in a given file, the frontmatter may be omitted entirely and only a prompt template provided."]}),`
`,n(e.h2,{id:"full-example",children:"Full Example"}),`
`,n(e.p,{children:"Here’s an example of a Prompt frontmatter:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"name"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" greetingPrompt"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"variant"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" formal"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"model"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" googleai/gemini-1.5-flash"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"tools"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" "})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  -"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" timeOfDay"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"config"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  version"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" gemini-1.5-flash-latest"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  temperature"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 0.7"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  topK"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 20"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"  topP 0.8"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  stopSequences"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    -"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" STOPSTOPSTOP"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"input"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  default"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    name"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" Guest"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  schema"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    name"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    language?"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"output"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  format"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" json"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  schema"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    greeting"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, the greeting to provide to the guest"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    formalityLevel"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" number, the level of formality of your response"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"metadata"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  customKey"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    customValue"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 123"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h2,{id:"available-fields",children:"Available Fields"}),`
`,n(e.h3,{id:"name",children:n(e.code,{children:"name"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The name of the prompt. If unspecified, inferred by the filename of the loaded prompt (e.g. ",n(e.code,{children:"myPrompt.prompt"})," has an inferred name of ",n(e.code,{children:"myPrompt"}),")."]}),`
`]}),`
`,n(e.h3,{id:"variant",children:n(e.code,{children:"variant"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The variant name for the prompt. If unspecified, inferred by the filename of the loaded prompt (e.g. ",n(e.code,{children:"myPrompt.variant1.prompt"})," has inferred name of ",n(e.code,{children:"myPrompt"})," and inferred variant of ",n(e.code,{children:"variant1"}),")."]}),`
`]}),`
`,n(e.h3,{id:"model",children:n(e.code,{children:"model"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})," or ",n(e.code,{children:"ModelArgument<Options>"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The name of the model to use for this prompt, e.g., ",n(e.code,{children:"googleai/gemini-1.5-flash-latest"}),". The Prompt implementation is responsible for resolving a string model name to an executable model."]}),`
`]}),`
`,n(e.h3,{id:"tools",children:n(e.code,{children:"tools"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string[]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Names of tools (registered in the Prompt implementation) to allow use of in this prompt."]}),`
`]}),`
`,n(e.h3,{id:"config",children:n(e.code,{children:"config"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Configuration to be passed to the model implementation as a ",n(e.code,{children:"Map<string,any>"}),". The specific configuration options vary depending on the model implementation."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Common Config:"}),` Model implementations should respect the following config properties where applicable:
`,n(e.ul,{children:[`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"version"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," While ",n(e.code,{children:"model"})," specifies a model “family” (e.g. Gemini 1.5 Flash, Claude 3.5 Sonnet), ",n(e.code,{children:"version"})," specifies a particular version/checkpoint of the model to use. This allows for version pinning and reproducibility of results."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:'"gemini-1.5-pro-0801"'})," or ",n(e.code,{children:'"v2"'})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"temperature"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Controls the randomness of the model’s output. Higher values (e.g., ",n(e.code,{children:"0.8"}),") make the output more random, while lower values (e.g., ",n(e.code,{children:"0.2"}),") make it more deterministic."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Range:"})," Typically between 0 and 1, depends on model implementation."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:"0.7"})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"maxOutputTokens"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Limits the maximum number of tokens in the model’s response. This can help control the length of the generated text."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:"150"})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"topK"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Limits the number of highest probability vocabulary tokens to consider at each step. This can help focus the model’s output on more likely tokens."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:"40"})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"topP"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Sets a probability threshold for token selection. The model will only consider tokens whose cumulative probability exceeds this threshold."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Range:"})," Typically between 0 and 1"]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:"0.95"})]}),`
`]}),`
`]}),`
`,n(e.li,{children:[`
`,n(e.p,{children:[n(e.code,{children:"stopSequences"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string[]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," An array of strings that, if encountered, will cause the model to stop generating further output. This is useful for controlling where the model’s response should end."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),"  ",n(e.code,{children:'["END", "\\n\\n", "User:"]'})]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"input",children:n(e.code,{children:"input"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines the input variables the prompt. If ",n(e.code,{children:"input"})," is not specified, the implementation should accept any ",n(e.code,{children:"Map<string,any>"})," values as input and pass them to the prompt template."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Properties:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"default"}),`:
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"any"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines the default input variable values to use if none are provided. Input values passed from the implementation should be merged into these values with a shallow merge strategy."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.code,{children:"schema"}),`:
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.a,{href:"schema",children:"Schema"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Schema representing the input values for the prompt. Must correspond to a JSON Schema ",n(e.code,{children:"object"})," type."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"output",children:n(e.code,{children:"output"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines the expected model output format."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Properties:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.code,{children:"format"}),`:
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Common Values:"})," ",n(e.code,{children:"json"}),", ",n(e.code,{children:"text"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Desired output format for this prompt. Output formats are implementation-specific, but"]}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.code,{children:"schema"}),`:
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.a,{href:"schema",children:"Schema"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Schema representing the expected output from the prompt. Must correspond to a JSON Schema ",n(e.code,{children:"object"})," type."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n(e.h3,{id:"metadata",children:n(e.code,{children:"metadata"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"Map<string, any>"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Arbitrary metadata to be used by code, tools, and libraries."]}),`
`]})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(r,{...i})}):r(i)}const k="src/content/docs/reference/frontmatter.mdx",g="/workspaces/.prompt/docs/src/content/docs/reference/frontmatter.mdx",l=(i={})=>d({...i,components:{Fragment:c,...i.components,"astro-image":i.components?.img??o}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!s.layout;l.moduleId="/workspaces/.prompt/docs/src/content/docs/reference/frontmatter.mdx";export{l as Content,u as __usesAstroImage,l as default,g as file,s as frontmatter,m as getHeadings,k as url};
