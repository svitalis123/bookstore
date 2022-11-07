const BOOKADD = 'redux/books/addBook';
const BOOKREMOVE = 'redux/books/removeBook';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BOOKADD:
      return [
        ...state,
      ];
    case BOOKREMOVE:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export const addbook = () => ({ type: BOOKADD });

export const removebook = () => ({ type: BOOKREMOVE });
