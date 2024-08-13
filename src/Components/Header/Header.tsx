import React from 'react';
import MoreIcon from '../Assets/more-vertical-rectangle.svg';
import LogoIcon from '../Assets/user.svg';
import './Header.css';

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className='header'>
      <div className='logo'>
        <img src={LogoIcon} alt='logo' className="logo-icon" />
      </div>
      <nav className='navStyle'>
        <ul className='regularBar'>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <ul className='more-icon'>
          <li className='more-icon-li'>
            <a href="#more" onClick={toggleSidebar}>
              <img src={MoreIcon} alt='more' className="menu-icon" />
            </a>
          </li>
        </ul>
      </nav>
      <button className='login-btn-nav'>Login</button>
    </header>
  );
};

export default Header;
