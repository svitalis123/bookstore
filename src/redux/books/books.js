import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKADDED = 'bookstore/books/addBook';
const BOOKREMOVED = 'bookstore/books/removeBook';
const FETCHEDBOOK = 'bookstore/books/fetchBook';

const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W38ScjAvgeaMhmiA2GmJ/books/';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'bookstore/books/fetchBook/fulfilled':
      return action.payload.books;
    case 'bookstore/books/addBook/fulfilled':
      return [
        ...state,
        action.payload.books,
      ];
    case 'bookstore/books/removeBook/fulfilled':
      return state.filter((arr) => arr[0] !== action.payload);
    default:
      return state;
  }
};

export const fetchbook = createAsyncThunk(FETCHEDBOOK, async () => {
  const res = await axios.get(url);
  return {
    books: Object.entries(res.data),
  };
});

export const addbook = createAsyncThunk(BOOKADDED, async (payload) => {
  await axios.post(url, {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
  });

  return {
    books: [
      payload.id,
      [
        {
          title: payload.title,
          author: payload.author,
          caregory: payload.category,
        },
      ],
    ],
  };
});

export const removebook = createAsyncThunk(BOOKREMOVED, async (payload) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/W38ScjAvgeaMhmiA2GmJ/books/${payload}`);
  return payload;
});
