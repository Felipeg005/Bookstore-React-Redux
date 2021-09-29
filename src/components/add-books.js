import React from 'react';

class AddBook extends React.Component {
  render() {
    return (
      <>
      <h2 className="form-title">Add New</h2>
      <form className="form">
        <input type="text"></input>
        <button type="submit">Submit</button>
      </form>
      </>
    );
  }
}

export default AddBook;