import React, { useState } from 'react';
import Search from '../Search';
import BookList from '../BooksList/BookList';

const Dashboard = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Search searchText={searchText} onSearch={handleSearch} />
      <BookList searchText={searchText} />
      <BookForm/>
    </>
  );
};

export default Dashboard;
