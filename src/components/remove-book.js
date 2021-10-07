/* eslint-disable */
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const RemoveBook = () => {
  console.log('works here');
  const dispatch = useDispatch();
  const removeBookFromStorage= (e) => {
  if (e) {

  console.log(e);
  const removeThisBook = {
  bookId: e.id
  }
  dispatch(removeBooks(removeThisBook));
  dispatch(removeBooks(removeThisBook));
    }
  }

  return <h1>holla</h1>
}
export default RemoveBook;