import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import tw from "tailwind-styled-components";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from 'next/router';
import { useAuth } from "@/context/AuthContext";
import { AUTH_LOGIN } from "@/utils/serverUrl";

const Container = tw.div`
  max-w-sm
  mx-auto
  my-8 
  p-4
  bg-white
  shadow-md
  rounded-md
  h-[350px]
`;

const Title = tw.h2`
  text-2xl 
  text-blue-500
  text-center
  font-bold
  mb-4
`;

const Form = tw.form`
  px-8 
`;

const Input = tw.input`
  w-full 
  px-3 
  py-2 
  rounded-md 
  border 
  focus:outline-none 
  focus:border-blue-500
  text-black
`;

const ErrorMessage = tw.span`
  text-red-500
`;

const Button = tw.button`
  w-full 
  bg-blue-500 
  hover:bg-blue-600 
  text-white 
  font-bold 
  py-2 
  px-4 
  rounded-md 
  focus:outline-none 
  focus:shadow-outline
`;

const SignUpLink = tw.div`
  text-center
  text-black
  mt-4
`;

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const { login } = useAuth();


  const onSubmit = async (data) => {
    try {
      const submitForm = await axios.post(AUTH_LOGIN, data);
      
      if (submitForm.data.ok) {
        localStorage.setItem('accessToken', submitForm.data.token);
        toast.success(submitForm.data.message);
        let userData = { 
          id: submitForm.data.id,
          firstName: submitForm.data.firstName,
          lastName: submitForm.data.lastName,
          email: submitForm.data.email,
        }
        localStorage.setItem('user', JSON.stringify(userData));
        login(userData);
        setTimeout(() => {
          router.push('/')
        }, 1000);
      } else {
        toast.error(submitForm.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      } else {
        toast.error("An error occurred while processing your request.");
      }
    }
  };

  return (
    <Container>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <Input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && (
            <ErrorMessage>Email is required</ErrorMessage>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            type="password"
            name="password"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors.password && (
            <ErrorMessage>Password is required</ErrorMessage>
          )}
        </div>
        <Button type="submit">Sign In</Button>
      </Form>
      <SignUpLink>
        Don&apos;t have an account?{" "}
        <Link className="text-blue-500 hover:underline" href="/signup">
          Sign Up
        </Link>
      </SignUpLink>
      <Toaster position="top-right"/>
    </Container>
  );
};

export default SignIn;
