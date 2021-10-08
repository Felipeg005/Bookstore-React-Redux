import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewBook from './Book';
import { GetBooks } from '../redux/books/books';

const BookList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetBooks());
  }, []);

  const bookStorage = useSelector((state) => state);

  return (
    <div className="list-container">
    <ul className="list-elements">
    {bookStorage.booksReducer.map((book) => (
      <NewBook
        key={book.item_id}
        bookId={book.item_id}
        bookTitle={book.title}
        category={book.category}
        bookClassName='book-container'
      />
    ))}
    </ul>
  </div>
  );
};

export default BookList;