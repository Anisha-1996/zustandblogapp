"use client";

import { useParams, useRouter } from "next/navigation";
import { useStore } from "@/store";
import Swal from "sweetalert2";
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function SingleBlogPage() {
  const { id } = useParams();
  const router = useRouter();

  const blogs = useStore((state) => state.blogs);
  const deleteBlog = useStore((state) => state.deleteBlog);
  const blog = blogs.find((blogItem) => blogItem.id === Number(id));

  if (!blog) {
    return <p className="p-6">Blog not found</p>;
  }

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Delete Blog?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (result.isConfirmed) {
      deleteBlog(blog.id);
      router.push("/blogs");
    }
  }

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto px-4 py-6">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          {blog.title}
        </h1>

        {/* AUTHOR + DATE */}
        <div className="text-sm text-gray-500 mb-6">
          By <span className="font-medium">{blog.author}</span> •{" "}
          {new Date(blog.createdAt).toLocaleString()}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => router.push(`/blogs/${blog.id}/edit`)}
            className="bg-blue-200 hover:bg-blue-300 text-black px-4 py-1 rounded-md text-sm"
          >
            Edit Blog
          </button>

          <button
            onClick={handleDelete}
            className="bg-yellow-200 hover:bg-yellow-400 text-black px-4 py-1 rounded-md text-sm"
          >
            Delete Blog
          </button>
        </div>

        {/* CONTENT */}
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

      </div>
    </ProtectedRoute>
  )
}