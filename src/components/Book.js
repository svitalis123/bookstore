import React from 'react';

const Book = (props) => (
  <div>
    {props.bookData.map((item) => (
      <div key={item.key}>
        <h2>{item.title}</h2>
        <h3>{item.author}</h3>
      </div>
    ))}
  </div>
);

export default Book;
