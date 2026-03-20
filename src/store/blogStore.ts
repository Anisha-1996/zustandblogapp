import { StateCreator } from "zustand";
import { Blog } from "@/types/blog";
import { showToast } from "@/utils/helpers";

export interface BlogState {
  blogs: Blog[];

  addBlog: (newBlog: Blog) => void;
  updateBlog: (id: number, title: string, content: string) => void;
  deleteBlog: (id: number) => void;
}

export const createBlogSlice: StateCreator<BlogState> = (set) => ({
  blogs: [],

  addBlog: (newBlog) => {
    set((state) => ({
      blogs: [...state.blogs, newBlog],
    }));

    showToast("Blog created successfully", "success");
  },

  updateBlog: (id, title, content) => {
    set((state) => ({
      blogs: state.blogs.map((blogItem) =>
        blogItem.id === id
          ? { ...blogItem, title, content }
          : blogItem
      ),
    }));

    showToast("Blog updated successfully", "success");
  },

  deleteBlog: (id) => {
    set((state) => ({
      blogs: state.blogs.filter(
        (blogItem) => blogItem.id !== id
      ),
    }));

    showToast("Blog deleted successfully", "success");
  },
});