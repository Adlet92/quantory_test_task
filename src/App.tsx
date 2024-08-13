import { useState } from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import LoginForm from './Components/LoginForm/LoginForm';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Header toggleSidebar={toggleSidebar} />
      <main className='main-content'>
        <LoginForm />
      </main>
      <Footer />
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default App;
