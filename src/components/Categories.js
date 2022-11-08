import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const cate = useSelector((state) => state.categories);
  return (
    <div>
      <p>{cate}</p>
      <button type="button" onClick={() => dispatch(statusChecked())}>Check status</button>
    </div>
  );
};

export default Categories;
