/* eslint-disable */
import { useDispatch } from 'react-redux';
import React from 'react';
import { addBook } from '../redux/books/books';

const AddBooks = () => {
  const dispatch = useDispatch();
  
  const submitBookToStore = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const newBook = {
      id: '',
      title: e.target[0].value,
      author: '',
    };
    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
  }
  return (
    <>
    <h2 className="form-title">Add New</h2>
    <form className="form" onSubmit={submitBookToStore}>
      <input type="text"></input>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default AddBooks;