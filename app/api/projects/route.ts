import { NextResponse } from "next/server";
import { fetchProjectDetails } from "@/utils/projects";

export const runtime = "edge";

export async function GET() {
  const username = "MaxFdev";
  const projects = await fetchProjectDetails(username);
  return NextResponse.json(projects);
}
