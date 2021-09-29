import React from "react";
import AddBook from "../components/add-books";
import BookList from "../components/books-list";

class Home extends React.Component {
  render() {
    return (
      <>
      <BookList />
      <AddBook />
      </>
    );
  }
}

export default Home;