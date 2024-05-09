import axios from 'axios';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';

const Container = tw.div`
  max-w-md
  mx-auto
  my-8 
  p-4
  bg-white
  shadow-md
  rounded-md
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
  pt-6 
  mb-4
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

const Label = tw.label`
  block 
  text-gray-700 
  font-bold 
  mb-2
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
const SignInLink = tw.div`
  text-center
  text-black
  my-4
`;

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const submitForm = await axios.post('http://localhost:5500/api/auth/register', data);
      console.log(submitForm.data.message, 'submitForm');
      
      if (submitForm.data.ok) {
        toast.success(submitForm.data.message);
        setTimeout(() => {
          router.push('/')
        }, 2000);
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
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            type="text"
            name="firstName"
            {...register('firstName', { required: true })}
            placeholder="Enter your first name"
          />
          {errors.firstName && <ErrorMessage>First Name is required</ErrorMessage>}
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            type="text"
            name="lastName"
            {...register('lastName', { required: true })}
            placeholder="Enter your last name"
          />
          {errors.lastName && <ErrorMessage>Last Name is required</ErrorMessage>}
        </div>
        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            {...register('email', { required: true })}
            placeholder="Enter your email"
          />
          {errors.email && <ErrorMessage>Email is required</ErrorMessage>}
        </div>
        <div className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            {...register('password', { required: true })}
            placeholder="Enter your password"
          />
          {errors.password && <ErrorMessage>Password is required</ErrorMessage>}
        </div>
        <Button type="submit">Sign Up</Button>
      </Form>
      <SignInLink>
         Already registered?{" "}
        <Link className="text-blue-500 hover:underline " href="/">
          Login
        </Link>
      </SignInLink>
    <Toaster position="top-right"/>
    </Container>
  );
};

export default SignUp;
