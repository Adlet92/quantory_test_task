import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginForm from './Components/LoginForm/LoginForm';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header
        toggleSidebar={toggleSidebar}
        isLoggedIn={isLoggedIn}
        onLoginLogout={handleLogout}
      />
      <main className='main-content'>
        {isLoggedIn ? (
          <div style={{ textAlign: 'center', marginTop: '20vh' }}>
            <h1>Login successful</h1>
          </div>
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
      </main>
      <Footer />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isLoggedIn={isLoggedIn}
        onLoginLogout={handleLogout}/>
    </div>
  );
}

export default App;
