import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { skillGroups } from "../data";

export default defineTool({
  name: "list_skills",
  title: "List skills",
  description:
    "List Eniolami Saheed's skills and tools, grouped by category (strategic, content & SEO, social media, tools & analytics).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Sign in to this portfolio to use its tools.");
    return {
      content: [{ type: "text", text: JSON.stringify(skillGroups, null, 2) }],
      structuredContent: { groups: skillGroups },
    };
  },
});
