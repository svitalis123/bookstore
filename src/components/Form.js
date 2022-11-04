import React from 'react';

const Form = () => (
  <form>
    <input type="text" placeholder="Book Title" required />
    <input type="text" placeholder="Author" required />
    <button type="button">Add Book</button>
  </form>
);

export default Form;
