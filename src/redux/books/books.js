const BOOKADDED = 'redux/books/addBook';
const BOOKREMOVED = 'redux/books/removeBook';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKADDED:
      return [
        ...state,
      ];
    case BOOKREMOVED:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export const addbook = () => ({ type: BOOKADDED });

export const removebook = () => ({ type: BOOKREMOVED });
