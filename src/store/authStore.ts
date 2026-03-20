import { StateCreator } from "zustand";
import { User } from "@/types/user";
import { showToast } from "@/utils/helpers";

export interface AuthState {
  users: User[];
  currentUser: string | null;

  register: (newUser: User) => void;
  login: (loginData: User) => boolean;
  logout: () => void;
}

export const createAuthSlice: StateCreator<AuthState> = (set, get) => ({
  users: [],
  currentUser: null,

  register: (newUser) => {
    const existingUsers = get().users;

    const userAlreadyExists = existingUsers.find(
      (existingUser) => existingUser.username === newUser.username
    );

    if (userAlreadyExists) {
      showToast("User already exists", "error");
      return;
    }

    set({ users: [...existingUsers, newUser] });
    showToast("Registration successful", "success");
  },

  login: (loginData) => {
    const existingUsers = get().users;

    if (existingUsers.length === 0) {
      showToast("No users found. Please register first.", "error");
      return false;
    }

    const matchedUser = existingUsers.find(
      (existingUser) =>
        existingUser.username === loginData.username &&
        existingUser.password === loginData.password
    );

    if (matchedUser) {
      set({ currentUser: matchedUser.username });
      return true;
    } else {
      showToast("Invalid credentials", "error");
      return false;
    }
  },

  logout: () => {
    set({ currentUser: null });
    showToast("Logged out successfully", "success");
  },
});