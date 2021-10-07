// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

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
      const newState = state.filter((book) => book.id !== Number(action.payload.bookId));
      for (let i = 0; i < newState.length; i += 1) {
        newState[i].id = i + 1;
      }
      localStorage.setItem('bookStorage', JSON.stringify(newState));
      return newState;
    }
    /*
    use ES6 filter() method to create a new array, which will not contain the book you
    want to remove from the store (filter by the id key - i.e.:
    return state.filter(book => book.id !== id);
    */
   case GET_BOOKS: {
      state = await GetBooks();
      console.log(state);
      return state;
   }
    default:
      return state;
  }
};

export default reducer;

// Action Creators

const GetBooks = (payload) => async (dispatch) => {
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books';
  const response = await fetch(URL, {
    method: 'GET',
  });
  console.log(response.text());

  // dispatch({
  //   type: ADD_BOOK,
  //   payload,
  // });
};

export const addBook = (payload) => async (dispatch) => {
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books';
  const response = await fetch(URL, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: payload.id,
      title: payload.title,
      author: payload.author,
      category: 'fiction',
    }),
  });
  console.log(response.text());

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});