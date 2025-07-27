import { NextResponse } from "next/server";
import { fetchProjectDetails } from "@/utils/projects";

export const runtime = "edge";

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT;
  const projects = await fetchProjectDetails(username || "");
  if (projects.length === 0) return NextResponse.json({"Error": "it broke."});
  return NextResponse.json(projects);
}
