import React from "react";
import Link from "next/link";

const Card = ({ post }: { post: any }) => {
  const postLabels = (embedded: any) => {
    // Implement your logic to get post labels
    return embedded.labels ? embedded.labels.join(", ") : "";
  };

  const limitExcerpt = (excerpt: any) => {
    // Implement your logic to limit the excerpt
    return excerpt.length > 100 ? excerpt.substring(0, 100) + "..." : excerpt;
  };

  return (
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
      <Link prefetch className="text-blue-500" href={`/blog/${post.slug}`}>
        Baca selengkapnya
      </Link>
    </div>
  );
};

export default Card;
