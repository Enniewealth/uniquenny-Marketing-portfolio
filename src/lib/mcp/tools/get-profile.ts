import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { profile, contact } from "../data";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Eniolami Saheed's profile: name, headline, summary, location, headline metrics and contact details.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: (_input, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Sign in to this portfolio to use its tools.");
    const data = { ...profile, contact };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
