/* eslint-disable*/
import { useDispatch } from 'react-redux';
import React from 'react';
import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    let bookStorage = JSON.parse(localStorage.getItem('bookStorage'));
    if (!bookStorage) {
      bookStorage = [];
    }
    const newBook = {
      id: bookStorage.length + 1,
      title: e.target[0].value,
      author: e.target[1].value,
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
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