"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function Logout() {
  const router = useRouter();
  const logout = async () => {
    try {
      const response = await axios.get("/api/logout");
      router.push("/");
      localStorage.removeItem("loggedin");
      console.log(response);
    } catch (error: any) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    logout();
  }, []);

  return (
    <div className="h-full w-full flex flex-grow justify-center items-center font-bold text-xl">
      Logout
    </div>
  );
}
