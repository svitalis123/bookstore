import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const thebooks = useSelector((state) => state.books);
  return (
    <div>
      <Book bookData={thebooks} />
      <Form />
    </div>
  );
};

export default Books;
