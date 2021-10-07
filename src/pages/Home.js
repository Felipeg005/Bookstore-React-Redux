import React from 'react';
import AddBooks from '../components/add-books';
import BookList from '../components/books-list';
import RemoveBook from '../components/remove-book';

class Home extends React.Component {
  render() {
    return (
      <>
      <BookList />
      <AddBooks />
      {/* <RemoveBook /> */}
      </>
    );
  }
}

// window.addEventListener('DOMContentLoaded', DisplayBooks);

window.addEventListener('click', (e) => {
  if (e.target.className === 'delete-button') {
    console.log(e.target.id);
    RemoveBook(e.target.id);
  }
});

export default Home;