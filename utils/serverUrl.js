
const API_SERVER_BASE_URL = process.env.NEXT_PUBLIC_API_SERVER_BASE_URL;

// BOOK ROUTES
export const CREATE_NEW_BOOK = `${API_SERVER_BASE_URL}/api/book`;

//AUTH ROUTES
export const AUTH_LOGIN= `${API_SERVER_BASE_URL}/api/auth/login`;
export const AUTH_REGISTER= `${API_SERVER_BASE_URL}/api/auth/register`;

// USER BOOK ROUTES
export const GET_ALL_BOOKS_BY_USER_ID = `${API_SERVER_BASE_URL}/api/userBook/getAllBooks`;
export const UPDATE_USER_BOOK_STATUS = `${API_SERVER_BASE_URL}/api/userBook`;
export const DELETE_USER_ALL_BOOKS = `${API_SERVER_BASE_URL}/api/userBook`;

// CLOUDINARY IMAGE ROUTE
export const CLOUDNIARY_IMG_URL = "https://api.cloudinary.com/v1_1/dipdjdhic/image/upload";

export const GET_GENRE = `${API_SERVER_BASE_URL}/api/genre`;