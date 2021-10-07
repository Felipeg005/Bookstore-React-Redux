import React from 'react';
import AddBooks from '../components/add-books';
import BookList from '../components/books-list';

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

export default Home;