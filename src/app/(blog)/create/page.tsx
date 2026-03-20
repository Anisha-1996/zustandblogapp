"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import { showToast } from "@/utils/helpers";
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function CreateBlogPage() {
  const addBlog = useStore((state) => state.addBlog);
  const currentUser = useStore((state) => state.currentUser);

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    if (!title || !content) {
      showToast("Please fill all fields", "error");
      return;
    }

    addBlog({
      id: Date.now(),
      title,
      content,
      author: currentUser || "",
      createdAt: new Date().toISOString(),
    });

    showToast("Blog created successfully", "success");

    setTitle("");
    setContent("");

    router.push("/blogs");
  }

  return (
    <ProtectedRoute>
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-gray-100 px-4">

      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">

        {/* TITLE */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Create New Blog
        </h2>

        <div className="space-y-5">

          {/* TITLE INPUT */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
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
              placeholder="Write your blog content..."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleCreate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition"
          >
            Publish Blog
          </button>

        </div>

      </div>
    </div>
    </ProtectedRoute>
  )
}