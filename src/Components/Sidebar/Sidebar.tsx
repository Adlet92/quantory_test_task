import AboutIcon from '../Assets/about-icon.svg';
import CloseIcon from '../Assets/close-icon.svg';
import ContactIcon from '../Assets/contact-icon.svg';
import HomeIcon from '../Assets/home-icon.svg';
import LogoutIcon from '../Assets/logout-icon.svg';
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
        <li>
          <a href="#home">
            <img src={HomeIcon} alt="Home" className="icon" />
          </a>
        </li>
        <li>
          <a href="#contact">
            <img src={ContactIcon} alt="Contact" className="icon" />
          </a>
        </li>
        <li>
          <a href="#about">
            <img src={AboutIcon} alt="About" className="icon" />
          </a>
        </li>
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
              <img src={LogoutIcon} alt="Logout" className="icon" />
            </a>
          </li>
        )}
        <li>
          <a href="#close" onClick={toggleSidebar}>
            <img src={CloseIcon} alt="Close" className="icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
