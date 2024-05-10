import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
  text-black
`;

const Select = tw.select`
  w-full
  px-3
  py-2
  border
  border-gray-300
  rounded
  focus:outline-none
  focus:border-blue-500
  text-black
`;

const Option = tw.option``;

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
const ErrorMessage = tw.span`
  text-red-500
`;


const BookForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [allGenres, setAllGenres] = useState([]);
  
  useEffect(() => {
    const getAllGenres = async () => {
      try {
        const response = await axios.get('http://localhost:5500/api/genre');
        setAllGenres(response.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    getAllGenres();
  }, []);

  const submitForm = (data) => {
    console.log(data,'data')
    // onSubmit(data);
  };

  return (
    <FormContainer>
      <Title>Add a new Book</Title>
      <form className='w-[80%] mx-auto' onSubmit={handleSubmit(submitForm)}>
        <FormField>
          <Label htmlFor="title">Title</Label>
          <Input type="text" name="title" {...register("title", { required: true })} />
          {errors.title && <ErrorMessage>Title is required</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="author">Author</Label>
          <Input type="text" name="author" {...register("author", { required: true })} />
          {errors.author && <ErrorMessage>Author is required</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationHouse">Publication House</Label>
          <Input type="text" name="publicationHouse" {...register("publicationHouse", { required: true })} />
          {errors.publicationHouse && <ErrorMessage>Publication House is required</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationDate">Publication Date</Label>
          <Input type="text" name="publicationDate" {...register("publicationDate", { required: true })} />
          {errors.publicationDate && <ErrorMessage>Publication Date is required</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="genre">Genre</Label>
          <Select name="genre" {...register("genre", { required: true })}>
            <Option value="">Select Genre</Option>
            {allGenres.map(genre => (
              <Option key={genre._id} value={genre._id}>{genre.name}</Option>
            ))}
          </Select>
          {errors.genre && <ErrorMessage>Genre is required</ErrorMessage>}
        </FormField>
        <FormField>
          <Label htmlFor="publicationYear">Publication Year</Label>
          <Input type="text" name="publicationYear" {...register("publicationYear", { required: true })} />
          {errors.publicationYear && <ErrorMessage>Publication Year is required</ErrorMessage>}
        </FormField>
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default BookForm;
