import React, { Component } from 'react';
import './Footer.css';


class Header extends Component {
  render() {
    return (
      <div>
        <footer className='main__footer'>
            <span>&copy; 2018 Created by Julia Drozd for Hummingbird Technologies</span>
            <address></address>
        </footer>
      </div>
    );
  }
}

export default Header;