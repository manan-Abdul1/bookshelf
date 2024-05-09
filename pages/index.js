import React, { useState } from 'react';
import SignIn from './login';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';


const Home = () => {
  const router = useRouter();

  return (
    <>
    <SignIn/>
    <Toaster position="top-right"/>
    </>
  );
};

export default Home;
