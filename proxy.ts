import { NextRequest, NextResponse } from "next/server";
import { acceptsMarkdown, renderMarkdown } from "@/lib/markdown";

export function proxy(request: NextRequest): Response {
  const markdownRequested =
    (request.method === "GET" || request.method === "HEAD") &&
    acceptsMarkdown(request.headers.get("accept"));

  if (markdownRequested) {
    const path = request.nextUrl.pathname.replace(/\/+$/, "") || "/";
    const markdown = renderMarkdown(path);
    if (markdown) {
      if (request.method === "HEAD") {
        return new Response(null, { status: markdown.status, headers: markdown.headers });
      }
      return markdown;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/me", "/privacy-policy", "/blog/:path*", "/projects/:path*"],
};
