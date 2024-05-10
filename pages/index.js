import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";

const Home = () => {
  const router = useRouter();
  const {userData } = useAuth();
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <Dashboard />
      <Toaster position="top-right" />
    </>
  );
};

export default Home;
