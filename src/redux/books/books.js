// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = JSON.parse(localStorage.getItem('bookStorage'));

// Reducer
const reducer = (state = initialState, action) => {
  const storageState = () => {
    if (JSON.parse(localStorage.getItem('bookStorage'))) {
      state = JSON.parse(localStorage.getItem('bookStorage'));
      localStorage.setItem('bookStorage', JSON.stringify(state));
    } else {
      state = [];
    }
    return state;
  };

  switch (action.type) {
    case ADD_BOOK: {
      storageState();
      const newState = [...state, action.payload];
      localStorage.setItem('bookStorage', JSON.stringify(newState));
      return (
        newState
      );
    }
    /*
    return a new state object in which the books array will contain a new book object,
    passed by action.payload.
    Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
    return [ ...state, action.payload];
    */
    case REMOVE_BOOK: {
      storageState();
      // console.log(state.filter((book) => {
      //   return book.id !== Number(action.payload.bookId);
      // }));
      const newState = state.filter((book) => book.id !== Number(action.payload.bookId));
      for (let i = 0; i < newState.length; i += 1) {
        newState[i].id = i + 1;
      }
      console.log(newState);
      localStorage.setItem('bookStorage', JSON.stringify(newState));
      return newState;
    }
    /*
    use ES6 filter() method to create a new array, which will not contain the book you
    want to remove from the store (filter by the id key - i.e.:
    return state.filter(book => book.id !== id);
    */

    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});