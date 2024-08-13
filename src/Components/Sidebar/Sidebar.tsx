import './Sidebar.css';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#close" onClick={toggleSidebar}>Close</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
