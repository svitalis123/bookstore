import React from 'react';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.bookData.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <button type="button" onClick={() => dispatch(removebook(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Book;
