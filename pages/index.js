import React, { useState } from 'react';
import SignIn from './login';
import { useRouter } from 'next/router';


const Home = () => {
  const router = useRouter();

  return (
    <>
    <SignIn/>
    </>
  );
};

export default Home;
