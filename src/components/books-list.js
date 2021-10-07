import React from 'react';
import { useSelector } from 'react-redux';
import NewBook from './Book';

const BookList = () => {
  const books = useSelector((state) => state);

  return (
    <div className="list-container">
    <ul className="list-elements">
    {books.map((book) => (
      <NewBook
        bookId={book.bookId}
        bookTitle={book.title}
        bookAuthor={book.author}
      />
    ))}
    </ul>
  </div>
  );
};

// export const DisplayBooks = () => {
//   const bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
//   const list = document.querySelector('.list-elements');
//   if (bookStorage) {
//     bookStorage.forEach((book) => {
//       list.innerHTML += `<li id="${book.id}" class="book-container">
//       <h2 class="books-title">${book.title}</h2>
//       <h3 class="books-title">${book.author}</h3>
//       <button id="remove${book.id}" class="delete-button">Delete</button>
//       </li>`;
//       if (book.id % 2 === 0) {
//         const bookContainer = document.getElementById(book.id);
//         bookContainer.classList.toggle('book-container-white');
//       }
//     });
//   }
// };

export default BookList;