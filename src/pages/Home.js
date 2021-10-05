import React from 'react';
import AddBooks from '../components/add-books';
import BookList, { DisplayBooks } from '../components/books-list';

class Home extends React.Component {
  render() {
    return (
      <>
      <BookList />
      <AddBooks />
      </>
    );
  }
}

window.addEventListener('DOMContentLoaded', DisplayBooks);

export default Home;