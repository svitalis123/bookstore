import React from 'react';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.bookData.map((item) => (
        <div key={item[0]}>
          <h2>{item[1][0].title}</h2>
          <h3>{item[1][0].author}</h3>
          <button type="button" onClick={() => dispatch(removebook(item[0]))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Book;
