import{$ as s,c as i}from"./_astro_assets.C3TYO3Ji.js";import{F as a}from"./utils.B81hyvOl.js";import"./astro/assets-service.CrlEOsaO.js";import"./index.CVpbhN_F.js";const c={title:"Template Content",sort_order:3};function k(){return[{depth:2,slug:"language-basics",text:"Language Basics"},{depth:3,slug:"expressions",text:"Expressions"},{depth:4,slug:"variable-interpolation",text:"Variable Interpolation"},{depth:4,slug:"escaped-expressions",text:"Escaped Expressions"},{depth:2,slug:"built-in-helpers",text:"Built-in Helpers"},{depth:3,slug:"conditional-blocks",text:"Conditional Blocks"},{depth:4,slug:"if",text:"#if"},{depth:4,slug:"else",text:"else"},{depth:4,slug:"unless",text:"#unless"},{depth:3,slug:"iteration",text:"Iteration"},{depth:4,slug:"each",text:"#each"},{depth:2,slug:"prompt-helpers",text:"Prompt Helpers"},{depth:4,slug:"json",text:"json"},{depth:4,slug:"role",text:"role"},{depth:4,slug:"history",text:"history"},{depth:4,slug:"media",text:"media"},{depth:4,slug:"section",text:"section"},{depth:2,slug:"partials",text:"Partials"},{depth:3,slug:"partial-with-arguments",text:"Partial with Arguments"},{depth:3,slug:"partial-with-context",text:"Partial with Context"},{depth:2,slug:"custom-helpers",text:"Custom Helpers"}]}const y=!0;function r(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...n.components};return i(a,{children:[i(e.p,{children:["Prompt uses a template syntax based on ",i(e.a,{href:"https://handlebarsjs.com/guide/",rel:"nofollow",target:"_blank",children:"Handlebars"}),", the popular templating language with existing implementations in several programming languages. This syntax allows for dynamic content insertion and basic logic within prompts."]}),`
`,i(e.h2,{id:"language-basics",children:"Language Basics"}),`
`,i(e.p,{children:["All Prompt implementations ",i(e.strong,{children:"MUST"})," implement the Handlebars features specified in these docs, but ",i(e.strong,{children:"MAY"})," also implement additional capabilities as documented in the ",i(e.a,{href:"https://handlebarsjs.com/guide/expressions.html",rel:"nofollow",target:"_blank",children:"Handlebars language specification"}),"."]}),`
`,i(e.h3,{id:"expressions",children:"Expressions"}),`
`,i(e.p,{children:["Handlebars expressions are contained within ",i(e.code,{children:"{{}}"})," tags."]}),`
`,i(e.h4,{id:"variable-interpolation",children:"Variable Interpolation"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{variableName}}"})," or ",i(e.code,{children:"{{object.propertyName}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Inserts the value of the specified variable."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"})," ",i(e.code,{children:"Hello, {{name}} from {{address.city}}!"})]}),`
`]}),`
`,i(e.h4,{id:"escaped-expressions",children:"Escaped Expressions"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"\\{{variableName}}"})," (escaped expression), ",i(e.code,{children:"{{{variableName}}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Renders the literal text ",i(e.code,{children:"{{variableName}}"})," without interpolation."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"})," ",i(e.code,{children:"This is how you show a variable: \\{{variableName}}"})]}),`
`]}),`
`,i(e.h2,{id:"built-in-helpers",children:"Built-in Helpers"}),`
`,i(e.p,{children:"Prompt provides several built-in helpers to enhance template functionality."}),`
`,i(e.h3,{id:"conditional-blocks",children:"Conditional Blocks"}),`
`,i(e.h4,{id:"if",children:i(e.code,{children:"#if"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{#if condition}}...{{/if}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Renders the block if the condition is truthy."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"#if"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" isLoggedIn"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  Welcome back!"})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"/if"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"else",children:i(e.code,{children:"else"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{#if condition}}...{{else}}...{{/if}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Provides an alternative block to render if the condition is falsy."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"#if"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" isLoggedIn"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  Welcome back!"})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"else"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  Please log in."})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"/if"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"unless",children:i(e.code,{children:"#unless"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{#unless condition}}...{{/unless}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Renders the block if the condition is falsy."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"#unless"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" isLoggedIn"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  Please log in to continue."})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"/unless"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h3,{id:"iteration",children:"Iteration"}),`
`,i(e.h4,{id:"each",children:i(e.code,{children:"#each"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{#each array}}...{{/each}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Iterates over an array or object properties, assigning ",i(e.code,{children:"this"})," to the currently enumerated item and ",i(e.code,{children:"@index"})," to the index or key within the array or object."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"#each"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" items"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  - {{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"this"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}} is item {{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"@index"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"/each"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h2,{id:"prompt-helpers",children:"Prompt Helpers"}),`
`,i(e.p,{children:["The following helpers ",i(e.strong,{children:"MUST"})," be included in all implementations of Prompt and provide the tools to manage multi-message and multi-modal prompting."]}),`
`,i(e.h4,{id:"json",children:i(e.code,{children:"json"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{json varName}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Serializes the provided variable into JSON and inserts it at the expression point."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Here is information about the current user:"})}),`
`,i(e.span,{class:"line"}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{ "}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"json"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" currentUser"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:" }}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"role",children:i(e.code,{children:"role"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:'{{role "roleName"}}'})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Begins a new message with the specified role for multi-message prompts."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"role"}),i(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "system"'}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"You are a helpful AI assistant."})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"role"}),i(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "user"'}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"What's the weather like today?"})}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"history",children:i(e.code,{children:"history"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{history}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Inserts the conversation history in multi-turn prompts."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"role"}),i(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "system"'}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"You are a helpful AI assistant."})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"history"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"role"}),i(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "user"'}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"What was my last question about?"})}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"media",children:i(e.code,{children:"media"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{media url=urlVariable}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Inserts media content (e.g., images) into the prompt."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Describe this image:"})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"media"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" url"}),i(e.span,{style:{color:"#DF8E1D","--shiki-dark":"#EED49F"},children:"="}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"imageUrl"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h4,{id:"section",children:i(e.code,{children:"section"})}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:'{{section "sectionName"}}'})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Manually positions specific sections within the prompt."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"This is the main content."})}),`
`,i(e.span,{class:"line"}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"section"}),i(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "output"'}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"This comes after the output instructions."})}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h2,{id:"partials",children:"Partials"}),`
`,i(e.p,{children:"Partials are reusable template snippets that can be included in other templates."}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{>partialName}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Includes the content of the specified partial."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{>"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"header"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"Main content goes here."})}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{>"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"footer"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h3,{id:"partial-with-arguments",children:"Partial with Arguments"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{>partialName arg1=value1 arg2=value2}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Includes a partial with specific arguments."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{>"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"greeting"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" name"}),i(e.span,{style:{color:"#DF8E1D","--shiki-dark":"#EED49F"},children:"="}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"userName"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" style"}),i(e.span,{style:{color:"#DF8E1D","--shiki-dark":"#EED49F"},children:"="}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"greetingStyle"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h3,{id:"partial-with-context",children:"Partial with Context"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Syntax:"})," ",i(e.code,{children:"{{>partialName this}}"})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Description:"})," Passes the current context to the partial."]}),`
`,i(e.li,{children:[i(e.strong,{children:"Example:"}),`
`,i(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:i(e.code,{children:[i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"#each"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" items"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"  {{>"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:"listItem"}),i(e.span,{style:{color:"#E64553",fontStyle:"italic","--shiki-dark":"#EE99A0","--shiki-dark-font-style":"italic"},children:" this"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line",children:[i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"{{"}),i(e.span,{style:{color:"#8839EF","--shiki-dark":"#C6A0F6"},children:"/each"}),i(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"}}"})]}),`
`,i(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,i(e.h2,{id:"custom-helpers",children:"Custom Helpers"}),`
`,i(e.p,{children:["All Prompt implementations ",i(e.strong,{children:"MUST"})," allow for the definition of custom helpers to extend Prompt syntax. The specific mechanism of custom helper registration is up to the specific implementation. Custom helpers are used in the following manner:"]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[i(e.strong,{children:"Basic Custom Helper:"})," ",i(e.code,{children:'{{customHelperName arg1 "arg2"}}'})]}),`
`,i(e.li,{children:[i(e.strong,{children:"Named Arguments:"})," ",i(e.code,{children:'{{customHelperName arg1=var1 arg2="var2"}}'})]}),`
`]})]})}function t(n={}){const{wrapper:e}=n.components||{};return e?i(e,{...n,children:i(r,{...n})}):r(n)}const u="src/content/docs/reference/template.mdx",g="/workspaces/.prompt/docs/src/content/docs/reference/template.mdx",l=(n={})=>t({...n,components:{Fragment:a,...n.components,"astro-image":n.components?.img??s}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!c.layout;l.moduleId="/workspaces/.prompt/docs/src/content/docs/reference/template.mdx";export{l as Content,y as __usesAstroImage,l as default,g as file,c as frontmatter,k as getHeadings,u as url};
