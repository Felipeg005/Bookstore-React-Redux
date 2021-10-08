// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books';
const initialState = [];
// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      const newState = [...state, action.payload];
      return (
        newState
      );
    }

    case REMOVE_BOOK: {
      const newState = state.filter((book) => book.id !== Number(action.payload.item_id));
      window.location.reload();
      return newState;
    }
    case GET_BOOKS: {
      return action.state;
    }
    default:
      return state;
  }
};

export default reducer;

// Action Creators

export const GetBooks = () => async (dispatch) => {
  const response = await fetch(URL);
  const booksApi = await response.json();
  const keys = Object.keys(booksApi);
  const state = [];
  keys.forEach((key) => {
    state.push({ ...booksApi[key][0], item_id: key });
  });
  dispatch({
    type: GET_BOOKS,
    state,
  });
};

export const addBook = (payload) => async (dispatch) => {
  await fetch(URL, {
    method: 'POST',
    body: new URLSearchParams(payload),
  });
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBooks = (payload) => async (dispatch) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books/${payload.item_id}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE_BOOK,
    payload,
  });
};