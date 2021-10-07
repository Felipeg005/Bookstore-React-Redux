const NewBook = (props) => {
  const { bookId, bookTitle, bookAuthor } = props;

  return (
    <li id={bookId} className="book-container">
      <h2 className="books-title">{bookTitle}</h2>
      <h3 className="books-title">{bookAuthor}</h3>
      <button id={bookId} class="delete-button">Delete</button>
    </li>
  );
};

export default NewBook;