// components/SignUp.js
import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Handle form submission logic (e.g., API call)
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-2xl text-blue-500 text-center font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="firstName">First Name</label>
          <input
            className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            name="firstName"
            {...register('firstName', { required: true })}
          />
          {errors.firstName && <span className="text-red-500">First Name is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="lastName">Last Name</label>
          <input
            className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            type="text"
            name="lastName"
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span className="text-red-500">Last Name is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
          <input
            className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            type="email"
            name="email"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">Password</label>
          <input
            className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:border-blue-500 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            type="password"
            name="password"
            {...register('password', { required: true })}
          />
          {errors.password && <span className="text-red-500">Password is required</span>}
        </div>
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
