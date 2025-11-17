const e="reference.mdx",t="docs",n="reference",a=`
A Prompt template format is made up of four parts:

\`\`\`handlebars
---
# (1) the Prompt Frontmatter goes here
output:
  schema:
    # (2) the Picoschema definition goes here
---

{{! (3) the Template Content goes here }}
\`\`\`

When executed, a Prompt template renders into (4) Common Model Interface. 

## Reference Docs

1. **[Prompt Frontmatter](/reference/frontmatter):** Included at the start of a Prompt template, frontmatter includes model configuration, input/output formatList, and tooling MediaMetadata.
2. **[Picoschema](/reference/picoschema):** The compact, YAML-optimized schema representation used for describing structured data in a Prompt template.
3. **[Template Content](/reference/template):** The core template of the prompt, based on Handlebars and extended with GenAI-specific capabilities.
4. **[Common Model Interface](/reference/model):** The "output" of a rendered Prompt template, a JSON object containing the rendered messages represented by the template as well as all associated metadata and configuration.
`,o={title:"Reference Docs",author:"Firebase",draft:!1,tags:[],hide_breadcrumbs:!1,hide_toc:!1,hide_sidenav:!1,max_width:!1},r={type:"content",filePath:"/workspaces/.prompt/docs/src/content/docs/reference.mdx",rawData:void 0};export{r as _internal,a as body,t as collection,o as data,e as id,n as slug};
