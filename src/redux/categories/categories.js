const STATUSCHECKED = 'redux/categories/statusChecked';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  if (action.type === STATUSCHECKED) {
    return 'Under construction';
  }
  return state;
};

export const statusChecked = () => ({ type: STATUSCHECKED });
