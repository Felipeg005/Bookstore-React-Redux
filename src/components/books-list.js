import React from 'react';

const BookList = () => {
  const listContainer = <div className="list-container">
  <ul className="list-elements">
  </ul>
</div>;

  return (
    listContainer
  );
};

export const DisplayBooks = () => {
  const bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
  const list = document.querySelector('.list-elements');
  if (bookStorage) {
    bookStorage.forEach((book) => {
      console.log(book.title);
      list.innerHTML += `<li id="${book.id}" class="book-container">
      <h2 class="books-title">${book.title}</h2>
      <h3 class="books-title">${book.author}</h3>
      <button id="delete-button">Delete</button>
      </li>`;
      if (book.id % 2 === 0) {
        const bookContainer = document.getElementById(book.id);
        bookContainer.classList.toggle('book-container-white');
      }
    });
  }
};

export default BookList;