"use client";

import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/store";
import { useState } from "react";
import { showToast } from "@/utils/helpers";
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function EditBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const blogs = useStore((state) => state.blogs);
  const updateBlog = useStore((state) => state.updateBlog);

  const blog = blogs.find((blogItem) => blogItem.id === Number(id));

  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");

  if (!blog) {
    return <p className="p-6">Blog not found</p>;
  }

  const handleUpdate = () => {
    if (!title || !content) {
      showToast("Please fill all fields", "error");
      return;
    }

    updateBlog(blog.id, title, content);

    showToast("Blog updated successfully", "success");

    router.push("/blogs");
  }

  return (

    <ProtectedRoute>

    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-gray-100 px-4">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Edit Blog
        </h2>

        <div className="space-y-5">

          {/* TITLE INPUT */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          {/* CONTENT INPUT */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Blog Content
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleUpdate}
            className="w-full bg-pink-300 hover:bg-pink-400 text-black py-2 rounded-lg font-medium transition"
          >
            Update Blog
          </button>

        </div>

      </div>
    </div>

    </ProtectedRoute>
  )
}