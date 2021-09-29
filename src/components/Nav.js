import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className={this.props.class}>
        <h1 className="logo">BookStore</h1>
        <ul className='menu-container'>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/categories">
            <li>Categories</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;