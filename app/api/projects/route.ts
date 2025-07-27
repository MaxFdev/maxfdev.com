import { NextResponse } from "next/server";
import { fetchProjectDetails } from "@/utils/projects";

export async function GET() {
  const username = process.env.NEXT_PUBLIC_GITHUB_ACCOUNT;
  const projects = await fetchProjectDetails(username || "");
  return NextResponse.json(projects);
}
