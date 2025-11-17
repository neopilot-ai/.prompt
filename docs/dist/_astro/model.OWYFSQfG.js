import{$ as c,c as n}from"./_astro_assets.C3TYO3Ji.js";import{F as s}from"./utils.B81hyvOl.js";import"./astro/assets-service.CrlEOsaO.js";import"./index.CVpbhN_F.js";const o={title:"Common Model Interface",sort_order:4};function k(){return[{depth:2,slug:"generaterequest",text:"GenerateRequest"},{depth:3,slug:"full-example",text:"Full Example"},{depth:3,slug:"properties",text:"Properties"},{depth:4,slug:"messages",text:"messages"},{depth:4,slug:"config",text:"config"},{depth:4,slug:"tools",text:"tools"},{depth:4,slug:"output",text:"output"},{depth:4,slug:"context",text:"context"},{depth:2,slug:"message",text:"Message"},{depth:3,slug:"properties-1",text:"Properties"},{depth:4,slug:"role",text:"role"},{depth:4,slug:"content",text:"content"},{depth:4,slug:"metadata",text:"metadata"},{depth:2,slug:"part",text:"Part"},{depth:3,slug:"textpart",text:"TextPart"},{depth:4,slug:"text",text:"text"},{depth:3,slug:"mediapart",text:"MediaPart"},{depth:4,slug:"media",text:"media"},{depth:4,slug:"mediacontenttype",text:"media.contentType"},{depth:4,slug:"mediaurl",text:"media.url"},{depth:3,slug:"toolrequestpart",text:"ToolRequestPart"},{depth:4,slug:"toolrequest",text:"toolRequest"},{depth:4,slug:"toolrequestref",text:"toolRequest.ref"},{depth:4,slug:"toolrequestname",text:"toolRequest.name"},{depth:4,slug:"toolrequestinput",text:"toolRequest.input"},{depth:3,slug:"toolresponsepart",text:"ToolResponsePart"},{depth:4,slug:"toolresponse",text:"toolResponse"},{depth:4,slug:"toolresponseref",text:"toolResponse.ref"},{depth:4,slug:"toolresponsename",text:"toolResponse.name"},{depth:4,slug:"toolresponseoutput",text:"toolResponse.output"},{depth:2,slug:"modelconfig",text:"ModelConfig"},{depth:3,slug:"common-config-properties",text:"Common Config Properties"},{depth:4,slug:"temperature",text:"temperature"},{depth:4,slug:"maxoutputtokens",text:"maxOutputTokens"},{depth:4,slug:"topk",text:"topK"},{depth:4,slug:"topp",text:"topP"},{depth:4,slug:"stopsequences",text:"stopSequences"},{depth:2,slug:"tool-object",text:"Tool Object"},{depth:3,slug:"name",text:"name"},{depth:3,slug:"description",text:"description"},{depth:3,slug:"inputschema",text:"inputSchema"},{depth:3,slug:"outputschema",text:"outputSchema"},{depth:2,slug:"output-object",text:"Output Object"},{depth:3,slug:"format",text:"format"},{depth:3,slug:"schema",text:"schema"},{depth:2,slug:"document-object",text:"Document Object"},{depth:3,slug:"id",text:"id"},{depth:3,slug:"content-1",text:"content"},{depth:3,slug:"metadata-1",text:"metadata"},{depth:2,slug:"notes",text:"Notes"}]}const A=!0;function r(i){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(s,{children:[n(e.p,{children:["Prompt implementations are not required to conform to any specific structured interface for interacting with GenAI models. However, the Prompt reference implementation in ",n(e.a,{href:"https://github.com/firebase/genkit",rel:"nofollow",target:"_blank",children:"Firebase Genkit"})," leverages a common model interface that may be useful for other implementors to follow."]}),`
`,n(e.p,{children:"In the future, a Prompt “spec test” will be made available that exercises the various parts of Prompt and compares the results to this common model request format."}),`
`,n(e.h2,{id:"generaterequest",children:"GenerateRequest"}),`
`,n(e.h3,{id:"full-example",children:"Full Example"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"json",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"{"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'  "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"messages"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"role"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "system"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"content"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        {"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"text"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "You are a helpful AI assistant."'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      ]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"role"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "user"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"content"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        {"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"text"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Hello, can you help me with a task?"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      ]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"role"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "model"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"content"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        {"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"text"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:` "Of course! I'd be happy to help you with a task. What kind of task do you need assistance with? Please provide me with more details, and I'll do my best to help you."`}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      ]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    },"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"role"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "user"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"content"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        {"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"text"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Can you analyze this image and tell me what you see?"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"},"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"media"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"contentType"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "image/jpeg"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"url"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAg..."'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"          }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      ]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  ],"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'  "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"config"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"temperature"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 0.7"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"maxOutputTokens"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 1000"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"topK"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 40"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"topP"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#FE640B","--shiki-dark":"#F5A97F"},children:" 0.95"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"stopSequences"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'"User:"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Human:"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"]"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'  "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"tools"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"name"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "weather"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "Get the current weather for a location"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"inputSchema"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "object"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"properties"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"location"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "string"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "The location to get weather for"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"          }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"required"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'"location"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"]"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"outputSchema"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "object"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"properties"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"temperature"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "number"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "The current temperature in Celsius"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"          },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"condition"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "string"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "The current weather condition"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"          }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"required"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'"temperature"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "condition"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"]"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  ],"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'  "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"output"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"format"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "json"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'    "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"schema"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "object"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"properties"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"analysis"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "string"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "A detailed analysis of the image"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"objects"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "array"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"items"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'            "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "string"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"          },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'          "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"description"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "A list of objects identified in the image"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"        }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"required"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:'"analysis"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "objects"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"]"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  },"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'  "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"context"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    {"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"id"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "doc1"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"content"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" [{"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"text"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "This is some context information that might be relevant to the task."'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}],"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'      "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"metadata"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'        "'}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"source"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:'"'}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:' "user-provided"'})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"      }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"    }"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"  ]"})}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h3,{id:"properties",children:"Properties"}),`
`,n(e.h4,{id:"messages",children:n(e.code,{children:"messages"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"array"})," of ",n(e.a,{href:"#message",children:"Message"})," objects."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The conversation history and current prompt."]}),`
`]}),`
`,n(e.h4,{id:"config",children:n(e.code,{children:"config"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.a,{href:"#modelconfig",children:"ModelConfig"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Configuration options for the model."]}),`
`]}),`
`,n(e.h4,{id:"tools",children:n(e.code,{children:"tools"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"array"})," of ",n(e.a,{href:"#tooldefinition",children:"ToolDefinition"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Definitions of tools available to the model."]}),`
`]}),`
`,n(e.h4,{id:"output",children:n(e.code,{children:"output"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.a,{href:"#output",children:"Output"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Specification for the desired output format."]}),`
`]}),`
`,n(e.h4,{id:"context",children:n(e.code,{children:"context"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"array"})," of ",n(e.a,{href:"#document",children:"Document"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Grounding context documents for the model."]}),`
`]}),`
`,n(e.h2,{id:"message",children:"Message"}),`
`,n(e.p,{children:"A message represents a single “turn” in a multi-turn conversation. Each message must have a role and specified content."}),`
`,n(e.h3,{id:"properties-1",children:"Properties"}),`
`,n(e.h4,{id:"role",children:n(e.code,{children:"role"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The role of the message sender. Can be “system”, “user”, “model”, or “tool”."]}),`
`]}),`
`,n(e.h4,{id:"content",children:n(e.code,{children:"content"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"array"})," of ",n(e.a,{href:"#part",children:"Part"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The content of the message, which can include text, media, tool requests, and tool responses."]}),`
`]}),`
`,n(e.h4,{id:"metadata",children:n(e.code,{children:"metadata"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Additional metadata for the message."]}),`
`]}),`
`,n(e.h2,{id:"part",children:"Part"}),`
`,n(e.p,{children:["A ",n(e.code,{children:"Part"})," object can be one of the following types:"]}),`
`,n(e.h3,{id:"textpart",children:"TextPart"}),`
`,n(e.h4,{id:"text",children:n(e.code,{children:"text"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The text content of the message."]}),`
`]}),`
`,n(e.h3,{id:"mediapart",children:"MediaPart"}),`
`,n(e.h4,{id:"media",children:n(e.code,{children:"media"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Contains media information."]}),`
`]}),`
`,n(e.h4,{id:"mediacontenttype",children:n(e.code,{children:"media.contentType"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The media content type. Inferred from data URI if not provided."]}),`
`]}),`
`,n(e.h4,{id:"mediaurl",children:n(e.code,{children:"media.url"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A ",n(e.code,{children:"data:"})," or ",n(e.code,{children:"https:"})," URI containing the media content."]}),`
`]}),`
`,n(e.h3,{id:"toolrequestpart",children:"ToolRequestPart"}),`
`,n(e.h4,{id:"toolrequest",children:n(e.code,{children:"toolRequest"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A request for a tool to be executed."]}),`
`]}),`
`,n(e.h4,{id:"toolrequestref",children:n(e.code,{children:"toolRequest.ref"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The call ID or reference for a specific request."]}),`
`]}),`
`,n(e.h4,{id:"toolrequestname",children:n(e.code,{children:"toolRequest.name"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The name of the tool to call."]}),`
`]}),`
`,n(e.h4,{id:"toolrequestinput",children:n(e.code,{children:"toolRequest.input"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"any"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The input parameters for the tool, usually a JSON object."]}),`
`]}),`
`,n(e.h3,{id:"toolresponsepart",children:"ToolResponsePart"}),`
`,n(e.h4,{id:"toolresponse",children:n(e.code,{children:"toolResponse"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A provided response to a tool call."]}),`
`]}),`
`,n(e.h4,{id:"toolresponseref",children:n(e.code,{children:"toolResponse.ref"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The call ID or reference for a specific request."]}),`
`]}),`
`,n(e.h4,{id:"toolresponsename",children:n(e.code,{children:"toolResponse.name"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The name of the tool."]}),`
`]}),`
`,n(e.h4,{id:"toolresponseoutput",children:n(e.code,{children:"toolResponse.output"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"any"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The output data returned from the tool, usually a JSON object."]}),`
`]}),`
`,n(e.h2,{id:"modelconfig",children:"ModelConfig"}),`
`,n(e.p,{children:[n(e.code,{children:"ModelConfig"})," is an arbitrary ",n(e.code,{children:"Map<string,any>"})," that depends on the specific implementation of the underlying model. However, the following common configuration options should be respected in implementation whenever applicable:"]}),`
`,n(e.h3,{id:"common-config-properties",children:"Common Config Properties"}),`
`,n(e.h4,{id:"temperature",children:n(e.code,{children:"temperature"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Controls the randomness of the model’s output."]}),`
`]}),`
`,n(e.h4,{id:"maxoutputtokens",children:n(e.code,{children:"maxOutputTokens"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Limits the maximum number of tokens in the model’s response."]}),`
`]}),`
`,n(e.h4,{id:"topk",children:n(e.code,{children:"topK"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Limits the number of highest probability vocabulary tokens to consider at each step."]}),`
`]}),`
`,n(e.h4,{id:"topp",children:n(e.code,{children:"topP"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"number"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Sets a probability threshold for token selection."]}),`
`]}),`
`,n(e.h4,{id:"stopsequences",children:n(e.code,{children:"stopSequences"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"array"})," of ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Sequences that, if encountered, will cause the model to stop generating further output."]}),`
`]}),`
`,n(e.h2,{id:"tool-object",children:"Tool Object"}),`
`,n(e.h3,{id:"name",children:n(e.code,{children:"name"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The name of the tool."]}),`
`]}),`
`,n(e.h3,{id:"description",children:n(e.code,{children:"description"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A description of what the tool does."]}),`
`]}),`
`,n(e.h3,{id:"inputschema",children:n(e.code,{children:"inputSchema"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A JSON Schema object describing the expected input for the tool."]}),`
`]}),`
`,n(e.h3,{id:"outputschema",children:n(e.code,{children:"outputSchema"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. A JSON Schema object describing the expected output from the tool."]}),`
`]}),`
`,n(e.h2,{id:"output-object",children:"Output Object"}),`
`,n(e.h3,{id:"format",children:n(e.code,{children:"format"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. The desired output format. All implementations should support ",n(e.code,{children:"json"})," and ",n(e.code,{children:"text"})," at a minimum."]}),`
`]}),`
`,n(e.h3,{id:"schema",children:n(e.code,{children:"schema"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. A JSON Schema object describing the expected structure of the output."]}),`
`]}),`
`,n(e.h2,{id:"document-object",children:"Document Object"}),`
`,n(e.h3,{id:"id",children:n(e.code,{children:"id"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," A unique identifier for the document."]}),`
`]}),`
`,n(e.h3,{id:"content-1",children:n(e.code,{children:"content"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"string"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," The text content of the document."]}),`
`]}),`
`,n(e.h3,{id:"metadata-1",children:n(e.code,{children:"metadata"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Type:"})," ",n(e.code,{children:"object"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Optional. Additional metadata for the document."]}),`
`]}),`
`,n(e.h2,{id:"notes",children:"Notes"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["The ",n(e.code,{children:"messages"})," array represents the conversation history and current prompt. Each message can contain multiple parts, allowing for rich, multimodal interactions."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"config"})," object allows fine-tuning of the model’s behavior. Not all models support all configuration options."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"tools"})," array defines functions that the model can call during its execution. This enables the model to interact with external systems or perform specific tasks."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"output"})," object specifies the desired format and structure of the model’s response. This is particularly useful for ensuring consistent, parseable outputs."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"context"})," array provides additional information that may be relevant to the task but isn’t part of the direct conversation history."]}),`
`,n(e.li,{children:["The ",n(e.code,{children:"candidates"})," field determines how many alternative responses the model should generate."]}),`
`]}),`
`,n(e.p,{children:"This interface provides a flexible and powerful way to interact with GenAI models, supporting various types of inputs, outputs, and model configurations."})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(r,{...i})}):r(i)}const y="src/content/docs/reference/model.mdx",F="/workspaces/.prompt/docs/src/content/docs/reference/model.mdx",l=(i={})=>d({...i,components:{Fragment:s,...i.components,"astro-image":i.components?.img??c}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!o.layout;l.moduleId="/workspaces/.prompt/docs/src/content/docs/reference/model.mdx";export{l as Content,A as __usesAstroImage,l as default,F as file,o as frontmatter,k as getHeadings,y as url};
