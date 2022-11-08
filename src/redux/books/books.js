const BOOKADDED = 'bookstore/books/addBook';
const BOOKREMOVED = 'bookstore/books/removeBook';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKADDED:
      return [
        ...state,
        action.payload,
      ];
    case BOOKREMOVED:
      return state.filter((arr) => arr.id !== action.payload);
    default:
      return state;
  }
};

export const addbook = (payload) => ({ type: BOOKADDED, payload });

export const removebook = (payload) => ({ type: BOOKREMOVED, payload });
