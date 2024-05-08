import React from 'react';
import BookCard from '../BookCard/BookCard';

const mockBooks = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publicationHouse: "Scribner",
      publicationDate: "April 10, 1925",
      genre: "Fiction",
      publicationYear: 1925,
      image: "https://c4.wallpaperflare.com/wallpaper/852/219/709/the-great-gatsby-gold-minimalism-digital-art-wallpaper-preview.jpg",
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publicationHouse: "J. B. Lippincott & Co.",
      publicationDate: "July 11, 1960",
      genre: "Novel",
      publicationYear: 1960,
      image: "https://c4.wallpaperflare.com/wallpaper/511/751/733/movie-to-kill-a-mockingbird-wallpaper-preview.jpg",
    },
    {
      title: "1984",
      author: "George Orwell",
      publicationHouse: "Secker & Warburg",
      publicationDate: "June 8, 1949",
      genre: "Dystopian",
      publicationYear: 1949,
      image: "https://wallpaperaccess.com/full/204497.jpg",
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publicationHouse: "Little, Brown and Company",
      publicationDate: "July 16, 1951",
      genre: "Novel",
      publicationYear: 1951,
      image: "https://c1.wallpaperflare.com/preview/538/645/254/book-focus-jerome-david-salinger-literature.jpg",
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      publicationHouse: "George Allen & Unwin",
      publicationDate: "September 21, 1937",
      genre: "Fantasy",
      publicationYear: 1937,
      image: "https://c4.wallpaperflare.com/wallpaper/368/146/434/the-lord-of-the-rings-rings-map-artwork-wallpaper-preview.jpg",
    },
    {
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      publicationHouse: "Bloomsbury",
      publicationDate: "June 26, 1997",
      genre: "Fantasy",
      publicationYear: 1997,
      image: "https://wallpaper.dog/large/978497.jpg",
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      publicationHouse: "George Allen & Unwin",
      publicationDate: "July 29, 1954",
      genre: "Fantasy",
      publicationYear: 1954,
      image: "https://c4.wallpaperflare.com/wallpaper/215/336/873/the-lord-of-the-rings-movies-wallpaper-preview.jpg",
    },
  ];
  

  const BookList = ({ searchText }) => {
    
    const filteredBooks = mockBooks.filter((book) => {
      const searchFields = ['title', 'author', 'publicationHouse', 'genre'];
      return searchFields.some(field =>
        book[field].toLowerCase().includes(searchText.toLowerCase())
      );
    });
  
    return (
      <div className="flex flex-wrap justify-center max-w-[80%]" style={{margin: '0 auto'}}>
        {filteredBooks.map((mockBook, index) =>
          <BookCard
            key={index}
            title={mockBook.title}
            author={mockBook.author}
            publicationHouse={mockBook.publicationHouse}
            publicationDate={mockBook.publicationDate}
            genre={mockBook.genre}
            publicationYear={mockBook.publicationYear}
            image={mockBook.image}
          />
        )}
      </div>
    );
  };
  

export default BookList;
