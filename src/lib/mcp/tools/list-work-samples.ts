import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { workSamples } from "../data";

export default defineTool({
  name: "list_work_samples",
  title: "List work samples",
  description:
    "List published content work samples (carousels, Instagram posts, blog writing), optionally filtered by type or category.",
  inputSchema: {
    type: z
      .string()
      .optional()
      .describe("Optional filter by sample type, e.g. Carousel, Instagram Post, Blog Writing."),
    category: z.string().optional().describe("Optional filter by category, e.g. Fintech, AI Tech."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ type, category }, ctx) => {
    if (!ctx.isAuthenticated()) throw new ToolError("Sign in to this portfolio to use its tools.");
    const matches = (a: string, b?: string) => !b || a.toLowerCase() === b.trim().toLowerCase();
    const samples = workSamples.filter(
      (sample) => matches(sample.type, type) && matches(sample.category, category),
    );
    return {
      content: [{ type: "text", text: JSON.stringify(samples, null, 2) }],
      structuredContent: { samples },
    };
  },
});
