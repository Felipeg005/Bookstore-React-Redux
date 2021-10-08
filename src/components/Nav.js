import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav className={this.props.class}>
        <h1 className="logo">BookStore</h1>
        <ul className='menu-container'>
          <Link to="/Bookstore-React-Redux/">
            <li className="menu-li">BOOKS</li>
          </Link>
          <Link to="/Bookstore-React-Redux/categories">
            <li className="menu-li">CATEGORIES</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;