/* eslint-disable*/
import { uuid } from 'uuidv4';
import { useDispatch } from 'react-redux';
import React from 'react';
import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    // e.preventDefault()
    let bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    if (!bookStorage) {
      bookStorage = [];
    }
    console.log('hi3');
    // const bookStorage = useSelector((state) => state);
    const newBook = {
      item_id: uuid(),
      // id: newBook.item_id,
      title: e.target[0].value,
      author: e.target[1].value,
      category: 'fiction',
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    // useEffect(() => {dispatch(addBook(newBook))}, []);
    dispatch(addBook(newBook))
    // useEffect(() => {dispatch(addBook(newBook))}, [])
  };
  return (
    <>
    <h2 className="form-title">Add New</h2>
    <form className="form" onSubmit={submitBookToStore}>
      <input type="text" required maxLength="30" placeholder="Title"></input>
      <input type="text" required maxLength="30" placeholder="Author"></input>
      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default AddBooks;