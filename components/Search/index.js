import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import tw from "tailwind-styled-components";

const SearchSection = tw.section`
  w-full
  my-2
`;

const Container = tw.div`
  mx-auto
  w-fit
  h-full
`;

const SearchForm = tw.div`
  flex
  justify-between
  items-center
  gap-4
  p-2
  bg-gray-800
  rounded-full
  shadow-md
`;

const SearchField = tw.div`
  flex
  items-center
  w-full
`;

const Input = tw.input`
  w-full
  bg-transparent
  text-white
  placeholder-grey
  focus:outline-none
`;

const ActiveIcon = tw(RiCloseCircleLine)`
  text-white
  cursor-pointer
`;

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [activeIcon, setActiveIcon] = useState(false);

  const handleSearchText = (value) => {
    setSearchText(value);
    setActiveIcon(value.length > 0);
  };

  const clearSearchText = () => {
    setSearchText("");
    setActiveIcon(false);
  };

  return (
    <SearchSection>
      <Container>
        <SearchForm>
          <FiSearch size="1.5rem" />
          <SearchField>
            <Input
              type="text"
              placeholder="Search for a book..."
              value={searchText}
              onChange={(event) => {
                handleSearchText(event.target.value);
              }}
            />
            {activeIcon && (
              <ActiveIcon
                size="1.3rem"
                onClick={clearSearchText}
              />
            )}
          </SearchField>
        </SearchForm>
      </Container>
    </SearchSection>
  );
};

export default Search;
