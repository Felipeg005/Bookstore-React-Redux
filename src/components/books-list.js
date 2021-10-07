import React from 'react';
import NewBook from './Book';

const BookList = () => {
  let bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  if (!bookStorage) {
    bookStorage = [];
  }

  const giveLiClass = (id) => {
    if (id % 2 === 0) {
      return 'book-container';
    }
    return 'book-container-white';
  };

  return (
    <div className="list-container">
    <ul className="list-elements">
    {bookStorage.map((book) => (
      <NewBook
        key={book.id}
        bookId={book.id}
        bookTitle={book.title}
        bookAuthor={book.author}
        bookClassName={giveLiClass(book.id)}
      />
    ))}
    </ul>
  </div>
  );
};

export default BookList;