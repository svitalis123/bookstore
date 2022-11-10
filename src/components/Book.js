import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { removebook } from '../redux/books/books';
import styles from './Book.module.css';

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.bookData.map((item) => (
        <div key={item[0]} className={styles.book_container}>
          <div className={styles.book_container_second_holder}>
            <article>
              <p className={styles.book_container_article_p1}>{item[1][0].category}</p>
              <h2 className={styles.book_container_article_h2}>{item[1][0].title}</h2>
              <h3 className={styles.book_container_article_h3}>{item[1][0].author}</h3>
            </article>
            <div className={styles.book_container_seconde_div_buttons}>
              <button className={styles.execptiom} type="button">Comment</button>
              <button type="button" onClick={() => dispatch(removebook(item[0]))}>Remove</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className={styles.book_container_third_div}>
            <div className={styles.book_container_third_div_first_container}>
              <div>
                <CircularProgress variant="determinate" size={50} thickness={4} value={75} />
              </div>
              <div>
                <h3 className={styles.book_container_third_div_first_container_second_div}>
                  {Math.floor(Math.random() * 100)}
                  %
                </h3>
                <p className={styles.book_container_third_div_first_container_second_div_p}>
                  Completed
                </p>
              </div>
            </div>
            <div className={styles.book_container_third_div_second_container}>
              <h3>CURRENT CHAPTER</h3>
              <p>Chapter 3</p>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;
