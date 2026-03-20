"use client";

import Link from "next/link";
import { useStore } from "@/store";
import { useRouter } from "next/navigation";

export default function Header() {
  const currentUser = useStore((state) => state.currentUser);
  const logout = useStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <header className="border-b bg-amber-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

        <h1 className="font-bold text-xl text-green-600">
           Anisha's Blog App
        </h1>

        <div className="flex gap-4 items-center">
          {!currentUser && (
            <>
              <Link href="/login" className="text-blue-500 hover:text-purple">
                Login
              </Link>
              <Link href="/register" className="text-blue-500 hover:text-purple">
                Register
              </Link>
            </>
          )}

          {currentUser && (
            <>
              <span className="text-sm text-yellow-600">
                HEY!!! Welcome, <span className="font-ubold">{currentUser}</span>
              </span>

              <button
                onClick={handleLogout}
                className="bg-cyan-200 hover:bg-cyan-200 text-black px-3 py-1 rounded-md text-sm"
              >
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </header>
  )
}