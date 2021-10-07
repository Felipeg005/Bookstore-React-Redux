// Actions
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = JSON.parse(localStorage.getItem('bookStorage'));
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4dkScpJEBinEhk7DfZib/books';

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

    case REMOVE_BOOK: {
      storageState();
      const newState = state.filter((book) => book.id !== Number(action.payload.bookId));
      for (let i = 0; i < newState.length; i += 1) {
        newState[i].id = i + 1;
      }
      localStorage.setItem('bookStorage', JSON.stringify(newState));
      window.location.reload();
      return newState;
    }
    case GET_BOOKS: {
      return (
        action.state
      );
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
  console.log(booksApi);
  const keys = Object.keys(booksApi);
  const state = [];
  keys.forEach((key) => {
    state.push({ ...booksApi[key][0], item_id: key });
  });
  console.log(state);
  localStorage.setItem('bookStorage', JSON.stringify(state));
  dispatch({
    type: GET_BOOKS,
    state,
  });
};

export const addBook = (payload) => async (dispatch) => {
  console.log(payload);
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  console.log(response.text());
  console.log(payload);

  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});