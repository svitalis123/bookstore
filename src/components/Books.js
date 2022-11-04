import React from 'react';
import Book from './Book';
import Form from './Form';

const data = [
  {
    key: 1,
    title: 'Morgan',
    author: 'freeman',
  },
  {
    key: 2,
    title: 'spiritual welfare',
    author: 'kaura mwirig',
  },
];

const Books = () => (
  <div>
    <Book bookData={data} />
    <button type="button">Remove</button>
    <Form />
  </div>
);

export default Books;
