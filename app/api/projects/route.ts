import { NextResponse } from "next/server";
import { fetchProjectDetails } from "@/utils/projects";
import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET() {
  const username = getRequestContext().env.NEXT_PUBLIC_GITHUB_ACCOUNT;
  if (!username) return NextResponse.json({ error: "Missing username env variable" });
  const projects = await fetchProjectDetails(username);
  if (projects.length === 0) return NextResponse.json({ error: "No projects found." });
  return NextResponse.json(projects);
}
