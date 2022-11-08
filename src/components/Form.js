import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addbook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addbook(obj));
    document.getElementById('form').reset();
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <input type="text" onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Book Title" required />
      <input type="text" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default Form;
