import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addbook } from '../redux/books/books';
import styles from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [category, setCategory] = useState('Leadership');
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addbook(obj));
    document.getElementById('form').reset();
  };
  return (
    <div className={styles.container_form}>
      <div className={styles.line} />
      <h2 className={styles.container_form_h2}>Add New Book</h2>
      <form onSubmit={handleSubmit} className={styles.container_form_form} id="form">
        <input type="text" className={styles.container_form_form_input1} onChange={(e) => setTitle(e.target.value)} name="title" placeholder="Book Title" required />
        <input type="text" className={styles.container_form_form_input1} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
        <select
          type="text"
          className={styles.container_form_form_input2}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="category"
        >
          <option value="Leadership">Leadership</option>
          <option value="Science">Science</option>
          <option value="Fiction">Fiction</option>
        </select>
        <button type="submit" className={styles.container_form_form_button}>Add Book</button>
      </form>
    </div>
  );
};

export default Form;
