"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
  });

  const handleRegistration = async () => {
    try {
      const response = await axios.post("/api/registration", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("error signing up", error.message);
    }
  };

  return (
    <main className="h-full w-full flex items-center justify-center px-2">
      <div className="h-auto w-auto rounded-xl shadow-xl flex flex-col p-2">
        <h1 className="text-4xl font-title m-8">Create new account</h1>
        <div className="flex m-4 gap-4">
          <div className="w-1/2">
            <label className="block text-sm mb-1" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              className="w-full p-2 border bg-transparent rounded"
              placeholder="First Name"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm mb-1" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              className="w-full p-2 border bg-transparent rounded"
              placeholder="Last Name"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
          </div>
        </div>
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
        <div id="button" className="flex m-4">
          <button
            onClick={handleRegistration}
            className="w-full h-[45px] mr-2 bg-blue-500 text-white font-bold my-2 rounded"
          >
            Register
          </button>
        </div>
        <p className="m-4 text-center flex">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500">
            Log In
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Signup;
