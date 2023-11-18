"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", user);
      console.log("Login success", response.data);
      localStorage.setItem("loggedin", "true");
      router.push("/shop");
    } catch (error: any) {
      console.log("Login failed", error);
    }
  };

  return (
    <main className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-auto md:w-3/5 h-auto p-2 shadow-2xl rounded-xl">
        <h1 className="text-4xl font-title m-8">Log In</h1>
        <div className="m-4">
          <label className="block text-sm mb-1" htmlFor="username">
            Username
          </label>
          <input
            id="username"
            type="text"
            className="w-full p-2 border bg-transparent rounded"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
        </div>
        <div className="m-4">
          <label className="block text-sm mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full p-2 border bg-transparent rounded"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <div id="buttons" className="flex m-4 mt-3">
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white w-full h-[45px] mr-2 font-bold py-2 px-4 rounded mb-2"
          >
            Log In
          </button>
        </div>
        <p className="m-4">
          Don't have an account?
          <Link href={"/signup"} className="text-blue-300">
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}
