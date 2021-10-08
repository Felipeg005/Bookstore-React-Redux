import { React, useEffect } from 'react';
// import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import NewBook from './Book';
import { GetBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  // const loadBooks = bindActionCreators(GetBooks, dispatch);

  useEffect(() => {
    dispatch(GetBooks());
  }, []);

  // let bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  // if (!bookStorage) {
  //   bookStorage = [];
  // }

  const bookStorage = useSelector((state) => state);
  // console.log(bookStorage.booksReducer);

  // dispatch(GetBooks());

  return (
    <div className="list-container">
    <ul className="list-elements">
    {bookStorage.booksReducer.map((book) => (
      <NewBook
        key={book.item_id}
        bookId={book.item_id}
        bookTitle={book.title}
        bookAuthor={book.author}
        bookClassName='book-container'
      />
    ))}
    </ul>
  </div>
  );
};

export default BookList;