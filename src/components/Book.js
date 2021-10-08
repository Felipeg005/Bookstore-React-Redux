import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';
import progressImg from '../Img/Progress-img.png';

const NewBook = (props) => {
  const {
    bookId, bookTitle, category, bookClassName,
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
      <div className="book-info-container">
      <h3 className="books-category">{category}</h3>
      <h2 className="books-title">{bookTitle}</h2>
      <h3 className="books-author">Lorem Ipsum</h3>
      <button id={bookId} className="delete-button">Comments</button>
      <button id={bookId} className="delete-button" onClick={removeBook}>Remove</button>
      <button id={bookId} className="delete-button">Edit</button>
      </div>
      <div className="progress-container">
      <img src={progressImg} alt="Book-progress" className="progress-img"></img>
        <div>
        <p className="progress-percent">{Math.floor(Math.random() * 100) + 1 }%</p>
        <p className="progress-completed">Completed</p>
        </div>
      </div>
      <div className="current-chapter-container">
        <p className="current-chapter-title">Current Chapter</p>
        <p className="current-chapter">Lorem ipsum</p>
        <button className="update-progress-button">Update progress</button>
      </div>
    </li>
  );
};

export default NewBook;