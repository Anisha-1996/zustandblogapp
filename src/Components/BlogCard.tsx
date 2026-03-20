"use client";

import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/helpers";
import { Blog } from "@/types/blog";

export default function BlogCard({ blog }: { blog: Blog }) {
  const router = useRouter();


  return (
    <div className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-4 flex flex-col justify-between">

      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-800 mb-2">
        {blog.title}
      </h2>

      {/* SHORT CONTENT */}
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {blog.content}
      </p>

      {/* AUTHOR + DATE */}
      <div className="text-xs text-gray-400 mb-3">
        <span>By {blog.author}</span> •{" "}
        <span>{formatDate(blog.createdAt)}</span>
      </div>

      {/* READ MORE BUTTON */}
      <button
        onClick={() => router.push(`/blogs/${blog.id}`)}
        className="text-red-600 text-sm font-medium hover:underline self-start"
      >
        Read More →
      </button>

    </div>
  )

}