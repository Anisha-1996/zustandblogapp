import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createAuthSlice, AuthState } from "./authStore";
import { createBlogSlice, BlogState } from "./blogStore";

type StoreState = AuthState & BlogState;

export const useStore = create<StoreState>()(
  persist(
    (set, get, api) => ({
      ...createAuthSlice(set, get, api),
      ...createBlogSlice(set, get, api),
    }),
    {
      name: "blog-app-storage",
    }
  )
)