import { uuid } from 'uuidv4';
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
      item_id: uuid(),
      title: e.target[0].value,
      category: e.target[1].value,
    };
    dispatch(addBook(newBook));
  };
  return (
    <>
    <h2 className="form-title">Add New</h2>
    <form className="form" onSubmit={submitBookToStore}>
      <input type="text" required maxLength="30" placeholder="Title" className="title-input"></input>
      <select name='Categories' className="categories-input">
      <option selected disabled>Category</option>
        <option value='Action'>Action</option>
        <option value='Drama'>Drama</option>
        <option value='Thriller'>Thriller</option>
        <option value='Terror'>Terror</option>
        <option value='Psy-Fy'>Psy-Fy</option>
      </select>
      <button className="submit-button" type="submit">Add Book</button>
    </form>
    </>
  );
};

export default AddBooks;