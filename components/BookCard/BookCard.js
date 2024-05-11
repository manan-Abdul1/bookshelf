import React, { useState } from "react";
import tw from "tailwind-styled-components";

const CardContainer = tw.div`
  relative
  max-w-xs
  mx-auto
  bg-white
  shadow-md
  rounded-lg
  overflow-hidden
  mt-10
`;

const DropdownIcon = tw.div`
  absolute
  top-0
  left-0
  mt-2
  ml-2
  cursor-pointer
  transition-transform
  duration-500
`;

const DropdownContent = tw.div`
  absolute
  top-0
  left-0
  mt-8
  ml-2
  p-2
  bg-white
  shadow-md
  rounded-md
  border
`;

const DropdownItem = tw.div`
  text-black
  cursor-pointer
  transition
  hover:(text-blue-500)
`;

const CardContent = tw.div`
  p-4
`;

const Title = tw.h3`
  text-lg
  font-semibold
  text-gray-800
  truncate
`;

const Author = tw.p`
  text-sm
  text-gray-600
  mt-1
`;

const DetailsContainer = tw.div`
  mt-4
`;

const DetailItem = tw.div`
  flex
  items-center
  text-gray-600
  text-sm
  mb-2
`;

const DetailLabel = tw.span`
  font-semibold
  mr-1
`;

const DetailValue = tw.span``;

const BookImage = tw.img`
  w-full
  h-40
  object-cover
  object-center
  mb-4
`;

const BookCard = ({
    title,
    author,
    publicationHouse,
    publicationDate,
    genre,
    publicationYear,
    imageUrl,
    _id,
    status
}) => {
    console.log(status,'status')
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <CardContainer>
            <DropdownIcon
                onClick={toggleDropdown}
                style={{ transform: showDropdown ? "rotate(90deg)" : "" }}
            >
                {!showDropdown ? (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                )}
            </DropdownIcon>
            {showDropdown && (
                <DropdownContent>
                    <DropdownItem className="hover:text-blue-500 ">
                        Plan to Read
                    </DropdownItem>
                    <DropdownItem className="hover:text-blue-500">Reading</DropdownItem>
                    <DropdownItem className="hover:text-blue-500">Completed</DropdownItem>
                </DropdownContent>
            )}
            {imageUrl && <BookImage src={imageUrl} alt={title} />}
            <CardContent>
                <Title>{title}</Title>
                <Author>by {author}</Author>
                <DetailsContainer>
                    <DetailItem>
                        <DetailLabel>Publication House:</DetailLabel>
                        <DetailValue>{publicationHouse}</DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailLabel>Publication Date:</DetailLabel>
                        <DetailValue>{publicationDate}</DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailLabel>Genre:</DetailLabel>
                        <DetailValue>{genre.name}</DetailValue>
                    </DetailItem>
                    <DetailItem>
                        <DetailLabel>Publication Year:</DetailLabel>
                        <DetailValue>{publicationYear}</DetailValue>
                    </DetailItem>
                </DetailsContainer>
            </CardContent>
        </CardContainer>
    );
};

export default BookCard;
