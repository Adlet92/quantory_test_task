import { useState } from 'react';
import './App.css';
import MoreIcon from './Components/Assets/more-vertical-rectangle.svg';
import LogoIcon from './Components/Assets/user.svg';
import LoginForm from './Components/LoginForm/LoginForm';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <header className='header'>
        <div className='logo'>
          <img src={LogoIcon} alt='more' className="logo-icon"/>
        </div>
        <nav>
        <ul className='sidebar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <ul className='regularBar'>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
          </ul>
          <ul className='more-icon'>
            <li><a href="#more" onClick={toggleSidebar}>
              <img src={MoreIcon} alt='more' className="menu-icon"/>
            </a></li>
          </ul>
        </nav>
        <button className='login-btn'>Login</button>
      </header>
      <main className='main-content'>
        <LoginForm />
      </main>
      <footer className='copyrightText'>
        &copy; Copyright 2024
      </footer>
      <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#close" onClick={toggleSidebar}>Close</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
