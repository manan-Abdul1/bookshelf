import React from 'react';
import SignIn from './login';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '@/context/AuthContext';
import Dashboard from '@/components/Dashboard/Dashboard';


const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
    {isLoggedIn ? <Dashboard /> : <SignIn />}
    <Toaster position="top-right"/>
    </>
  );
};

export default Home;
