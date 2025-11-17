import{$ as c,c as n}from"./_astro_assets.C3TYO3Ji.js";import{F as s}from"./utils.B81hyvOl.js";import"./astro/assets-service.CrlEOsaO.js";import"./index.CVpbhN_F.js";const a={title:"Picoschema",sort_order:2};function k(){return[{depth:2,slug:"full-example",text:"Full Example"},{depth:2,slug:"picoschema-reference",text:"Picoschema Reference"},{depth:3,slug:"basic-types",text:"Basic Types"},{depth:4,slug:"string",text:"string"},{depth:4,slug:"number",text:"number"},{depth:4,slug:"integer",text:"integer"},{depth:4,slug:"boolean",text:"boolean"},{depth:4,slug:"null",text:"null"},{depth:4,slug:"any",text:"any"},{depth:3,slug:"optional-fields",text:"Optional Fields"},{depth:3,slug:"field-descriptions",text:"Field Descriptions"},{depth:3,slug:"arrays",text:"Arrays"},{depth:3,slug:"objects",text:"Objects"},{depth:3,slug:"enums",text:"Enums"},{depth:3,slug:"wildcard-fields",text:"Wildcard Fields"},{depth:3,slug:"additional-notes",text:"Additional Notes"},{depth:2,slug:"eject-to-json-schema",text:"Eject to JSON Schema"},{depth:2,slug:"error-handling",text:"Error Handling"}]}const A=!0;function r(i){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...i.components};return n(s,{children:[n(e.p,{children:"Picoschema is a compact, YAML-optimized schema definition format specifically designed to aid in describing structured data for better understanding by GenAI models. Whenever a schema is accepted by Prompt in its Frontmatter, the Picoschema format is accepted."}),`
`,n(e.p,{children:"Picoschema compiles to JSON Schema and is a subset of JSON Schema capabilities."}),`
`,n(e.h2,{id:"full-example",children:"Full Example"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"yaml",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"product"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  id"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, Unique identifier for the product"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  description?"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, Optional detailed description of the product"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  price"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" number, Current price of the product"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  inStock"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" integer, Number of items in stock"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  isActive"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" boolean, Whether the product is currently available"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  category(enum, Main category of the product)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" ["}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:"ELECTRONICS"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" CLOTHING"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" BOOKS"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" HOME"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"]"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  tags(array, List of tags associated with the product)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  primaryImage"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    url"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, URL of the primary product image"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    altText"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, Alternative text for the image"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  attributes(object, Custom attributes of the product)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    (*)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" any, Allow any attribute name with any value"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  variants?(array, List of product variant objects)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    id"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, Unique identifier for the variant"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    name"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, Name of the variant"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    price"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" number, Price of the variant"})]}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h2,{id:"picoschema-reference",children:"Picoschema Reference"}),`
`,n(e.h3,{id:"basic-types",children:"Basic Types"}),`
`,n(e.p,{children:"Picoschema supports the following scalar types:"}),`
`,n(e.h4,{id:"string",children:n(e.strong,{children:"string"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: string[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents a string value."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"title: string"})]}),`
`]}),`
`,n(e.h4,{id:"number",children:n(e.strong,{children:"number"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: number[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents a numeric value (integer or float)."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"price: number"})]}),`
`]}),`
`,n(e.h4,{id:"integer",children:n(e.strong,{children:"integer"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: integer[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents an integer value."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"age: integer"})]}),`
`]}),`
`,n(e.h4,{id:"boolean",children:n(e.strong,{children:"boolean"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: boolean[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents a boolean value."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"isActive: boolean"})]}),`
`]}),`
`,n(e.h4,{id:"null",children:n(e.strong,{children:"null"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: null[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents a null value."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"emptyField: null"})]}),`
`]}),`
`,n(e.h4,{id:"any",children:n(e.strong,{children:"any"})}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName: any[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Represents a value of any type."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"data: any"})]}),`
`]}),`
`,n(e.h3,{id:"optional-fields",children:"Optional Fields"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," Add ",n(e.code,{children:"?"})," after the field name."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Marks a field as optional. Optional fields are also automatically nullable."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"subtitle?: string"})]}),`
`]}),`
`,n(e.h3,{id:"field-descriptions",children:"Field Descriptions"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," Add a comma followed by the description after the type."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Provides additional information about the field."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"date: string, the date of publication e.g. '2024-04-09'"})]}),`
`]}),`
`,n(e.h3,{id:"arrays",children:"Arrays"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName(array[, optional description]): elementType"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines an array of a specific type."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"tags(array, string list of tags): string"})]}),`
`]}),`
`,n(e.h3,{id:"objects",children:"Objects"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName(object[, optional description]):"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines a nested object structure."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"yaml",children:n(e.code,{children:[n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"address(object, the address of the recipient)"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  address1"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, street address"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  address2?"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string, optional apartment/unit number etc."})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  city"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  state"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"})]}),`
`,n(e.span,{class:"line"})]})}),`
`]}),`
`]}),`
`,n(e.h3,{id:"enums",children:"Enums"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"fieldName(enum[, optional description]): [VALUE1, VALUE2, ...]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Defines a field with a fixed set of possible values."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"status(enum): [PENDING, APPROVED, REJECTED]"})]}),`
`]}),`
`,n(e.h3,{id:"wildcard-fields",children:"Wildcard Fields"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[n(e.strong,{children:"Syntax:"})," ",n(e.code,{children:"(*): type[, optional description]"})]}),`
`,n(e.li,{children:[n(e.strong,{children:"Description:"})," Allows additional properties of a specified type in an object."]}),`
`,n(e.li,{children:[n(e.strong,{children:"Example:"})," ",n(e.code,{children:"(*): string"})]}),`
`]}),`
`,n(e.h3,{id:"additional-notes",children:"Additional Notes"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["By default, all fields are required unless marked as optional with ",n(e.code,{children:"?"}),"."]}),`
`,n(e.li,{children:["Objects defined using Picoschema do not allow additional properties unless a wildcard ",n(e.code,{children:"(*)"})," is added."]}),`
`,n(e.li,{children:"Optional fields are automatically made nullable in the resulting JSON Schema."}),`
`,n(e.li,{children:["The ",n(e.code,{children:"any"})," type results in an empty schema ",n(e.code,{children:"{}"})," in JSON Schema, allowing any value."]}),`
`]}),`
`,n(e.h2,{id:"eject-to-json-schema",children:"Eject to JSON Schema"}),`
`,n(e.p,{children:["Picoschema automatically detects if a schema is already in JSON Schema format. If the top-level schema contains a ",n(e.code,{children:"type"})," property with values like “object”, “array”, or any of the scalar types, it’s treated as JSON Schema."]}),`
`,n(e.p,{children:["You can also explicitly use JSON Schema by defining ",n(e.code,{children:'{"type": "object"}'})," at the top level. For example:"]}),`
`,n(e.pre,{class:"astro-code astro-code-themes catppuccin-latte catppuccin-macchiato",style:{backgroundColor:"#eff1f5","--shiki-dark-bg":"#24273a",color:"#4c4f69","--shiki-dark":"#cad3f5",overflowX:"auto",whiteSpace:"pre-wrap",wordWrap:"break-word"},tabindex:"0","data-language":"handlebars",children:n(e.code,{children:[n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"output"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"  schema"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    type"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" object"}),n(e.span,{style:{color:"#9CA0B0",fontStyle:"italic","--shiki-dark":"#6E738D","--shiki-dark-font-style":"italic"},children:" # this is now JSON Schema"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"    properties"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"})]}),`
`,n(e.span,{class:"line",children:[n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"      field1"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:" {"}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:"type"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" string"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:","}),n(e.span,{style:{color:"#1E66F5","--shiki-dark":"#8AADF4"},children:" description"}),n(e.span,{style:{color:"#179299","--shiki-dark":"#8BD5CA"},children:":"}),n(e.span,{style:{color:"#40A02B","--shiki-dark":"#A6DA95"},children:" A sample field"}),n(e.span,{style:{color:"#7C7F93","--shiki-dark":"#939AB7"},children:"}"})]}),`
`,n(e.span,{class:"line",children:n(e.span,{style:{color:"#4C4F69","--shiki-dark":"#CAD3F5"},children:"---"})}),`
`,n(e.span,{class:"line"})]})}),`
`,n(e.h2,{id:"error-handling",children:"Error Handling"}),`
`,n(e.p,{children:"Picoschema will throw errors in the following cases:"}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:"If an unsupported scalar type is used."}),`
`,n(e.li,{children:"If the schema contains values that are neither objects nor strings."}),`
`,n(e.li,{children:"If parenthetical types other than ‘object’ or ‘array’ are used (except for ‘enum’)."}),`
`]}),`
`,n(e.p,{children:"These error checks ensure that the Picoschema is well-formed and can be correctly translated to JSON Schema."})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,{...i,children:n(r,{...i})}):r(i)}const y="src/content/docs/reference/picoschema.mdx",u="/workspaces/.prompt/docs/src/content/docs/reference/picoschema.mdx",l=(i={})=>d({...i,components:{Fragment:s,...i.components,"astro-image":i.components?.img??c}});l[Symbol.for("mdx-component")]=!0;l[Symbol.for("astro.needsHeadRendering")]=!a.layout;l.moduleId="/workspaces/.prompt/docs/src/content/docs/reference/picoschema.mdx";export{l as Content,A as __usesAstroImage,l as default,u as file,a as frontmatter,k as getHeadings,y as url};
