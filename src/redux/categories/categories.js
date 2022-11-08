const STATUSCHECKED = 'bookstore/categories/statusChecked';

const initialState = [];

export default (state = initialState, action) => {
  if (action.type === STATUSCHECKED) {
    return 'Under construction';
  }
  return state;
};

export const statusChecked = () => ({ type: STATUSCHECKED });
