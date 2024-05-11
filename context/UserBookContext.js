import React, { createContext, useContext, useState } from "react";

const UserBookContext = createContext();

export const useUserBook = () => useContext(UserBookContext);

export const UserBookProvider = ({ children }) => {
  const [userBooks, setUserBooks] = useState([]);

  const updateUserBooks = (newUserBooks) => {
    setUserBooks(newUserBooks);
  };

  const updateBookStatus = (bookId, newStatus) => {

    const updatedBooks = userBooks.map((book) => {
      if (book.bookId._id === bookId) {
        return { ...book, status: newStatus };
      }
      return book;
    });

    setUserBooks(updatedBooks);
  };

  return (
    <UserBookContext.Provider value={{ userBooks, updateUserBooks, updateBookStatus }}>
      {children}
    </UserBookContext.Provider>
  );
};
