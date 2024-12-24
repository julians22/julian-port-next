"use client";

import React, { useState, useEffect } from "react";

import { getPosts } from "@/lib/wpJson";
import Card from "@/components/Blogs/Card";

export default function BlogWrapper({ initialPosts }: { initialPosts: any[] }) {
  const [posts, setPosts] = useState<any[]>(initialPosts);
  const [page, setPage] = useState(2); // Start from the second page
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const newPosts = await getPosts(2, true, page);

        if (Array.isArray(newPosts)) {
          setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        } else {
          console.error("Failed to fetch posts: Response is not an array");
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
      setLoading(false);
    };

    if (page > 1) {
      fetchPosts();
    }
  }, [page]);

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="gap-4 grid grid-cols-1 px-2 md:px-3 lg:px-4 xl:px-0 w-full">
      <div className="gap-4 grid grid-cols-12">
        <div className="col-span-12">
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {loading && <p>Loading...</p>}
            <button
              className="bg-green-500 hover:bg-green-700 px-4 py-2 rounded font-bold text-white"
              disabled={loading}
              onClick={loadMorePosts}
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
