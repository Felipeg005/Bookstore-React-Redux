import React from 'react';

class BookList extends React.Component {
  render() {
    return (
      <div className="list-container">
        <ul className="list-elements">
          <div className="book-container">
          <li><h1 className="books-title">Sample Book</h1></li>
          <li><button id="delete-button">Delete</button></li>
          </div>
        </ul>
      </div>
    );
  }
}

export default BookList;