import React from "react";

import { getCategories, getPosts } from "@/lib/wpJson";
import Header from "@/components/Blogs/Header";
import Head from "next/head";
interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
}

export default async function Page() {
  const categories: Category[] = await getCategories(2);
  const posts: any = await getPosts(2, true);

  let categoryItems = categories.map((category) => (
    <li key={category.id}>
      <a href={category.link}>{category.name}</a>
    </li>
  ));

  const limitExcerpt = (excerpt: string) => {
    return excerpt.length > 100 ? excerpt.substring(0, 100) + "..." : excerpt;
  };

  const postLabels = (_embedded: any, taxonomy: string = "category") => {
    const term = _embedded["wp:term"];

    if (!term) return "";
    let labels = "";

    term.flat().forEach((category: any) => {
      if (category.taxonomy === taxonomy) {
        labels += category.name + ", ";
      }
    });

    return labels.substring(0, labels.length - 2);
  };

  return (
    <div className="gap-4 grid grid-cols-1 px-2 lg:px-0 w-full">
      <Head>
          <title>
              Blog - Dean Abner Julian
          </title>
      </Head>
      <Header title="Blog" />

      <div className="gap-4 grid grid-cols-12">
        <div className="lg:block hidden col-span-2">
          <h4 className="mb-3 font-semibold text-2xl">Kategori</h4>
          <ul className="flex flex-col divide-y-2 divide-gray-300 dark:divide-gray-700">
            {categoryItems}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <div className="gap-4 grid grid-cols-1 lg:grid-cols-3">
            {posts.map((post: any) => (
              <div
                key={post.id}
                className="border-2 border-gray-300 dark:border-gray-700 p-4 rounded-lg"
              >
                <h3 className="mb-2 font-semibold text-green-500 text-lg">
                  {post.title.rendered}
                </h3>
                <div className="flex flex-nowrap gap-x-2 mb-2">
                  <span className="text-gray-500 text-xs">
                    {new Date(post.date).toLocaleDateString("id-ID", {
                      dateStyle: "medium",
                    })}{" "}
                    |{" "}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {post._embedded.author[0].name}
                  </span>
                  {postLabels(post._embedded) ? (
                    <span className="flex-grow-0 text-gray-500 text-xs">
                      {" "}
                      | {postLabels(post._embedded)}
                    </span>
                  ) : (
                    ""
                  )}
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: limitExcerpt(post.excerpt.rendered),
                  }}
                />

                <a className="text-blue-500" href={`/blog/${post.slug}`}>
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
