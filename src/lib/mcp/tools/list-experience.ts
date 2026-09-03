import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { experience } from "../data";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List Eniolami Saheed's professional roles with company, period, location and achievement highlights.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Sign in to this portfolio to use its tools.");
    return {
      content: [{ type: "text", text: JSON.stringify(experience, null, 2) }],
      structuredContent: { roles: experience },
    };
  },
});
