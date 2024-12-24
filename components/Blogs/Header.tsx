"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function Header({ title }: { title: string }) {
  const path = usePathname();

  return (
    <div>
      <div className="relative">
        <h1 className="mt-4 lg:mt-0 font-semibold text-center text-green-500 text-lg md:text-xl lg:text-4xl">
          {title}
        </h1>

        {/* Float right back button */}

        <div className="top-0 bottom-auto fixed inset-x-0 flex items-center space-x-4 bg-white mx-auto px-2 md:px-3 lg:px-4 py-2 w-full max-w-7xl container">
          <a className="font-semibold text-cardGreen" href="/">
            Beranda
          </a>

          {/* Back button to blog post */}
          {/* Show if route is != 'blog' */}

          {path !== "/blog" && (
            <a className="font-semibold text-cardGreen" href="/blog">
              Blog
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
