import { MetadataRoute } from "next";

import { getPosts } from "@/lib/wpJson";

const WEBSITE_HOST_URL = process.env.SITE_URL;

type changeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let blogPosts = await getPosts(2);
  const changeFrequency = "daily" as changeFrequency;

  const blogs = blogPosts.map((post: any) => ({
    url: `${WEBSITE_HOST_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...blogs];
}
