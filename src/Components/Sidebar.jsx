import React from 'react';

// Importing other icons as images
import categoriesIcon from '../assets/categories.png';
import dataCleaningIcon from '../assets/data-cleaning.png';
import secureIcon from '../assets/secure.png';
import speedometerIcon from '../assets/speedometer.png';

// Inline SVG for settings icon (styleable)
const SettingsIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="36"
    viewBox="0 0 24 24"
    fill="blue"
    {...props}
  >
    <path d="M19.14,12.94a7.48,7.48,0,0,0,.05-.94,7.48,7.48,0,0,0-.05-.94l2.11-1.65a.5.5,0,0,0,.12-.63l-2-3.46a.5.5,0,0,0-.61-.22l-2.49,1a7.28,7.28,0,0,0-1.63-.94L14,2.5a.5.5,0,0,0-.5-.5H10.5a.5.5,0,0,0-.5.5l-.38,2.56a7.28,7.28,0,0,0-1.63.94l-2.49-1a.5.5,0,0,0-.61.22l-2,3.46a.5.5,0,0,0,.12.63L4.86,11.06a7.48,7.48,0,0,0-.05.94,7.48,7.48,0,0,0,.05.94L2.75,14.59a.5.5,0,0,0-.12.63l2,3.46a.5.5,0,0,0,.61.22l2.49-1a7.28,7.28,0,0,0,1.63.94L10,21.5a.5.5,0,0,0,.5.5h3a.5.5,0,0,0,.5-.5l.38-2.56a7.28,7.28,0,0,0,1.63-.94l2.49,1a.5.5,0,0,0,.61-.22l2-3.46a.5.5,0,0,0-.12-.63ZM12,15.5A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>
);

export default function Sidebar() {
  const [hovered, setHovered] = React.useState(null);

  const sidebarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '300px',
    background: '#393E46',
    color: '#fff',
    boxShadow: '2px 0 12px rgba(30,58,138,0.15)',
    zIndex: 1000,
    padding: '32px 0 0 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 700,
    marginBottom: '2.5rem',
    letterSpacing: '1px'
  };

  const menuStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%'
  };

  const iconStyle = {
    width: '36px',
    height: '36px',
    marginBottom: '8px'
  };

  const itemHoverStyle = {
    background: 'rgba(255,255,255,0.08)'
  };

  const menuItems = [
    { name: 'Categories', icon: categoriesIcon },
    { name: 'Data Cleaning', icon: dataCleaningIcon },
    { name: 'Secure', icon: secureIcon },
    { name: 'Settings', icon: 'settings' }, // use special inline component
    { name: 'Speedometer', icon: speedometerIcon }
  ];

  return (
    <nav style={sidebarStyle}>
      <h2 style={titleStyle}>CacheWipe</h2>
      <ul style={menuStyle}>
        {menuItems.map((item, idx) => (
          <li
            key={item.name}
            style={{
              padding: '16px 24px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '1.1rem',
              fontWeight: 500,
              ...(hovered === idx ? itemHoverStyle : {})
            }}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            className="sidebar-item"
          >
            {item.icon === 'settings' ? (
              <SettingsIcon style={iconStyle} />
            ) : (
              <img src={item.icon} alt={item.name} style={iconStyle} />
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}
