import './Sidebar.css';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isLoggedIn: boolean;
  onLoginLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar, isLoggedIn, onLoginLogout }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        {isLoggedIn && (
          <li>
            <a
              href="#logout"
              onClick={(e) => {
                e.preventDefault();
                onLoginLogout();
                toggleSidebar();
              }}
            >
              Logout
            </a>
          </li>
        )}
        <li><a href="#close" onClick={toggleSidebar}>Close</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
