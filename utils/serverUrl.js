
const API_SERVER_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL;

// BOOK ROUTES

export const CREATE_NEW_BOOK = `${API_SERVER_BASE_URL}/api/book`;

// USER BOOK ROUTES
export const GET_ALL_BOOKS_BY_USER_ID = `${API_SERVER_BASE_URL}/api/userBook/getAllBooks`;
export const UPDATE_USER_BOOK_STATUS = `${API_SERVER_BASE_URL}/api/userBook`;

// CLOUDINARY IMAGE ROUTE
export const CLOUDNIARY_IMG_URL = "https://api.cloudinary.com/v1_1/dipdjdhic/image/upload";