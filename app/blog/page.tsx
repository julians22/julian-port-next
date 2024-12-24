import Head from "next/head";
import React from "react";

import Header from "@/components/Blogs/Header";
import BlogWrapper from "@/components/Blogs/BlogWrapper";
import { getPosts } from "@/lib/wpJson";

export default async function Page() {
  const initialPosts = await getPosts(2, true, 1);

  return (
    <div className="gap-4 grid grid-cols-1 px-2 md:px-3 lg:px-4 xl:px-0 w-full">
      <Head>
        <title>Blog - Dean Abner Julian</title>
      </Head>
      <Header title="Blog" />
      <BlogWrapper initialPosts={initialPosts} />
    </div>
  );
}