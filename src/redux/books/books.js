// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        
      };
    case REMOVE_BOOK:
      /*
      use ES6 filter() method to create a new array, which will not contain the book you
      want to remove from the store (filter by the id key - i.e.:
      return state.filter(book => book.id !== id);
      */
      break;
    default:
      return state;
  }
  return '';
};

export default reducer;

// Action Creators

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});