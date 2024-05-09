import React from 'react';
import { useForm } from 'react-hook-form';
import tw from 'tailwind-styled-components';

const FormContainer = tw.div`
  w-full
  max-w-md
  mx-auto
  mt-10
  py-10
  border
  border-gray-300
  rounded-xl
  bg-white
`;

const FormField = tw.div`
  mb-4
`;

const Label = tw.label`
  block
  mb-2
  text-gray-700
`;

const Input = tw.input`
  w-full
  px-3
  py-2
  border
  border-gray-300
  rounded
  focus:outline-none
  focus:border-blue-500
`;

const Button = tw.button`
  w-full
  bg-blue-500
  text-white
  font-bold
  py-2
  rounded
  hover:bg-blue-700
`;
const Title = tw.h2`
  text-2xl 
  text-blue-500
  text-center
  font-bold
  mb-4
`;

const BookForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    onSubmit(data);
  };

  return (
    <FormContainer>
      <Title>Add a new Book</Title>
      <form className='w-[80%] mx-auto' onSubmit={handleSubmit(submitForm)}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" name="title" {...register("title", { required: true })} />
          {errors.title && <span>Title is required</span>}
        </FormField>
        <FormField>
          <Label htmlFor="author">Author</Label>
          <Input type="text" name="author" {...register("author", { required: true })} />
          {errors.author && <span>Author is required</span>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationHouse">Publication House</Label>
          <Input type="text" name="publicationHouse" {...register("publicationHouse", { required: true })} />
          {errors.publicationHouse && <span>Publication House is required</span>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationDate">Publication Date</Label>
          <Input type="text" name="publicationDate" {...register("publicationDate", { required: true })} />
          {errors.publicationDate && <span>Publication Date is required</span>}
        </FormField>
        <FormField>
          <Label htmlFor="genre">Genre</Label>
          <Input type="text" name="genre" {...register("genre", { required: true })} />
          {errors.genre && <span>Genre is required</span>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationYear">Publication Year</Label>
          <Input type="text" name="publicationYear" {...register("publicationYear", { required: true })} />
          {errors.publicationYear && <span>Publication Year is required</span>}
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default BookForm;
