import React, { useState } from 'react';
import BookList from '@/components/BooksList/BookList';
import Search from '@/components/Search';

const Home = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
  };

  return (
    <>
      <Search searchText={searchText} onSearch={handleSearch} />
      <BookList searchText={searchText} />
    </>
  );
};

export default Home;
