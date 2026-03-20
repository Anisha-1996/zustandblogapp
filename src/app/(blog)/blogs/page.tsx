"use client";

import { useStore } from "@/store";
import { useRouter } from "next/navigation";
import BlogCard from "@/Components/BlogCard";
import ProtectedRoute from "@/Components/ProtectedRoute";


export default function BlogsPage() {
  const blogs = useStore((state) => state.blogs);
  const currentUser = useStore((state) => state.currentUser);
  const router = useRouter();

  const userBlogs = blogs.filter(
    (blog) => blog.author === currentUser
  );

  return (
    <ProtectedRoute>
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome, {currentUser}
      </h1>

      <button
        onClick={() => router.push("/create")}
        className="bg-green-200 text-black p-2 rounded mb-4"
      >
        Create Blog
      </button>

      {userBlogs.length === 0 ? (
        <p>No blogs yet...</p>
      ) : (
        <div className="space-y-4">
          {userBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
    </ProtectedRoute>
  );
}