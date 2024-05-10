import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import { GET_ALL_BOOKS_BY_USER_ID } from "@/utils/serverUrl";
import axios from "axios";

const Home = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [userBooks, setUserBooks] = useState([]);
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      router.push("/login");
    }
  }, []);
  const getAllBooksByUserId = async (userId) => {
    try {
      const response = await axios.get(`${GET_ALL_BOOKS_BY_USER_ID}/${userId}`);
      setUserBooks(response.data);
    } catch (error) {
      console.error("Error fetching user Books:", error);
    }
  };
  useEffect(() => {
    if (userData.id) {
      getAllBooksByUserId(userData.id);
    }
  }, [userData]);

  return (
    <>
      <Dashboard />
      <Toaster position="top-right" />
    </>
  );
};

export default Home;
