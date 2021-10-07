import { React, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import NewBook from './Book';
import { GetBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();
  const loadBooksAction = bindActionCreators(GetBooks, dispatch);

  useEffect(() => {
    loadBooksAction();
  }, []);

  let bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  if (!bookStorage) {
    bookStorage = [];
  }

  return (
    <div className="list-container">
    <ul className="list-elements">
    {bookStorage.map((book) => (
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