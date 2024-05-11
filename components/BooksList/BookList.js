import React, { useState, useEffect } from "react";
import BookCard from "../BookCard/BookCard";
import tw from 'tailwind-styled-components';
import { mockBooks } from "@/utils/mockData";
import { useRouter } from "next/router";
import { useUserBook } from "@/context/UserBookContext";

const Container = tw.div`
  flex
  flex-wrap
  justify-center
  max-w-[80%]
  mx-auto
  mb-40
`;

const CategorySection = tw.div`
  w-full
  mt-5
  mb-4
`;

const CategoryTitle = tw.h2`
  mb-2
`;

const CategoryBooks = tw.div`
  flex
  flex-wrap
  justify-center
`;

const SortSection = tw.div`
  w-full
  mb-4
  flex
  justify-between
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

const SortLabel = tw.label`
  mr-2
`;

const SortSelect = tw.select`
  px-2
  py-1
  border
  border-gray-300
  rounded
  text-black
`;

const BookList = ({ searchText }) => {
  const [sortCriteria, setSortCriteria] = useState('title');
  const [readingBooks, setReadingBooks] = useState([]);
  const [completedBooks, setCompletedBooks] = useState([]);
  const [planToReadBooks, setPlanToReadBooks] = useState([]);
  const router = useRouter();
  const { userBooks } = useUserBook();

  console.log(userBooks,'userBooks')

  useEffect(() => {
    // Categorize books based on their status
    const categorizedBooks = userBooks.reduce((acc, book) => {
      switch (book.status) {
          case "Reading":
              return { ...acc, reading: [...acc.reading, book] };
          case "Completed":
              return { ...acc, completed: [...acc.completed, book] };
          case "PlanToRead":
              return { ...acc, planToRead: [...acc.planToRead, book] };
          default:
              return acc;
      }
  }, { reading: [], completed: [], planToRead: [] });
  

    // Sort categorized books based on selected criteria
    const sortCategorizedBooks = (books) => {
      return books.sort((a, b) => {
        if (a[sortCriteria] < b[sortCriteria]) return -1;
        if (a[sortCriteria] > b[sortCriteria]) return 1;
        return 0;
      });
    };

    // Update state with sorted categorized books
    setReadingBooks(sortCategorizedBooks(categorizedBooks.reading));
    setCompletedBooks(sortCategorizedBooks(categorizedBooks.completed));
    setPlanToReadBooks(sortCategorizedBooks(categorizedBooks.planToRead));
  }, [sortCriteria, userBooks]);

  const filterBooks = (books) => {
    return books.filter((book) => {
      const searchFields = ['title', 'author', 'publicationHouse', 'genre'];
      return searchFields.some(field =>
        typeof book.bookId[field] === 'string' && 
        book.bookId[field].toLowerCase().includes(searchText.toLowerCase())
      );
    });
  };

  return (
    <Container>
      {/* Sort Dropdown */}
      <SortSection>
        <div>
        <SortLabel htmlFor="sortCriteria">Sort by:</SortLabel>
        <SortSelect
          id="sortCriteria"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publicationDate">Publication Date</option>
          <option value="genre">Genre</option>
        </SortSelect>
        </div>
        <div>
          <Button onClick={()=>router.push('/addBook')}>Add New Book</Button>
        </div>
      </SortSection>

      {/* Reading Books */}
      <CategorySection>
        <CategoryTitle>Reading</CategoryTitle>
        <CategoryBooks>
          {filterBooks(readingBooks).map((book, index) => (
            <BookCard key={index} status={book.status} {...book.bookId} />
          ))}
        </CategoryBooks>
      </CategorySection>

      {/* Completed Books */}
      <CategorySection>
        <CategoryTitle>Completed</CategoryTitle>
        <CategoryBooks>
          {filterBooks(completedBooks).map((book, index) => (
            <BookCard key={index} status={book.status} {...book.bookId} />
          ))}
        </CategoryBooks>
      </CategorySection>

      {/* Plan to Read Books */}
      <CategorySection>
        <CategoryTitle>Plan to Read</CategoryTitle>
        <CategoryBooks>
          {filterBooks(planToReadBooks).map((book, index) => (
            <BookCard key={index} status={book.status} {...book.bookId} />
          ))}
        </CategoryBooks>
      </CategorySection>
    </Container>
  );
};

export default BookList;
