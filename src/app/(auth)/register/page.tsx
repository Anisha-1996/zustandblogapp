"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store";
import { FiUser, FiLock } from "react-icons/fi";
import { showToast } from "@/utils/helpers";

export default function RegisterPage() {
  const register = useStore((state) => state.register);
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleRegister = () => {
  if (!username || !password) {
    showToast("Please fill all fields", "error");
    return;
  }

  register({ username, password });

  showToast("Registration successful", "success");

  setUsername("");
  setPassword("");

  router.push("/login");
}

return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 via-white to-gray-100 px-4">

    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Create an account
      </h2>

      <div className="space-y-4">

        {/* USERNAME */}
        <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
          <FiUser className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Username"
            className="w-full py-2 outline-none"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-blue-500">
          <FiLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full py-2 outline-none"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full bg-red-200 hover:bg-red-400 text-black py-2 rounded-lg font-medium transition"
        >
          Register
        </button>

      </div>

      {/* FOOTER */}
      <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <span
          onClick={() => router.push("/login")}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>

    </div>
  </div>
)
}