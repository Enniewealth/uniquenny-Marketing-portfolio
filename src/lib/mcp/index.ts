import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listSkillsTool from "./tools/list-skills";
import listWorkSamplesTool from "./tools/list-work-samples";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "portfolio-guide",
  title: "Portfolio Guide",
  version: "0.1.0",
  instructions:
    "Tools for Eniolami Saheed's marketing portfolio. Use `get_profile` for the bio and headline metrics, `list_experience` for roles and achievements, `list_skills` for expertise areas, and `list_work_samples` for published content work.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [getProfileTool, listExperienceTool, listSkillsTool, listWorkSamplesTool],
});
