import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const NewBook = (props) => {
  const {
    bookId, bookTitle, bookAuthor, bookClassName,
  } = props;
  const dispatch = useDispatch();
  const removeBook = (e) => {
    const removeThisBook = {
      item_id: e.target.id,
    };
    dispatch(removeBooks(removeThisBook));
  };

  return (
    <li id={bookId} className={bookClassName}>
      <h2 className="books-title">{bookTitle}</h2>
      <h3 className="books-author">{bookAuthor}</h3>
      <button id={bookId} className="delete-button" onClick={removeBook}>Delete</button>
    </li>
  );
};

export default NewBook;