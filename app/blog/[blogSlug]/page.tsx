import React from "react";
import { Metadata } from "next";

import { getPostBySlug } from "@/lib/wpJson";
import Header from "@/components/Blogs/Header";

type Props = {
  params: {
    blogSlug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.blogSlug);

  return {
    title: post ? post[0].title.rendered : "Dean Abner Julian Blog",
    description: post ? post[0].title.rendered : "Dean Abner Julian Blog",
  };
}

export default async function Page({ params }: Props) {
  const post = await getPostBySlug(params.blogSlug);

  return (
    <div className="px-2 md:px-3 lg:px-4 xl:px-0 w-full">
      {post && post.length > 0 ? (
        <div>
          <Header title={post[0].title.rendered} />
          <div className="gap-4 grid grid-cols-12">
            <div className="col-span-12 max-w-none dark:prose-dark prose prose-sm prose-stone">
              {/* Blog Information */}

              <div className="flex flex-nowrap gap-x-2 mb-2 font-medium text-black">
                <span className="text-gray-500 text-xs">
                  {new Date(post[0].date).toLocaleDateString("id-ID", {
                    dateStyle: "medium",
                  })}{" "}
                  |{" "}
                </span>
                <span className="text-gray-500 text-xs">
                  {post[0]._embedded?.author?.[0]?.name || "Unknown Author"}
                </span>
                {post[0]._embedded?.labels ? (
                  <span className="flex-grow-0 text-gray-500 text-xs">
                    {" "}
                    | {post[0]._embedded.labels.join(", ")}
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="gap-4 grid grid-cols-12">
          <div className="col-span-12">
            <h1 className="font-semibold text-4xl text-center">
              Blog not found
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}
