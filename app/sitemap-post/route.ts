import { NextResponse } from "next/server";

import { getPosts } from "@/lib/wpJson";

const WEBSITE_HOST_URL = process.env.SITE_URL;

export async function GET() {
  const posts = await getPosts(2);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${posts
      .map((post: any) => {
        return `
          <url>
            <loc>${WEBSITE_HOST_URL}/blog/${post.slug}</loc>
            <lastmod>${new Date(post.modified).toISOString()}</lastmod>
          </url>
        `;
      })
      .join("")}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
