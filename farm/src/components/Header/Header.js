import React, { Component } from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <div>
        <header className='main__header'>
            <a className='main__header--link' href='https://hummingbirdtech.com/' target='_blank' rel='noopener noreferrer'>
                <img src='https://hummingbirdtech.com/wp-content/themes/hummingbird2018/assets//images/xlogo.png.pagespeed.ic.LyvwE0BC1C.webp' alt='Hummingbird'/>
            </a>
            <h1 className='main__header--title'>Yield​ ​ Value​ ​ Calculation</h1>
        </header>
      </div>
    );
  }
}

export default Header;
