import React from 'react';
import { EnvironmentOutlined, CarryOutOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';

const tabs = [
  {
    key: 'map',
    label: 'Carte',
    icon: <EnvironmentOutlined />,
    color: '#4CAF50',
    path: '/map',
  },
  {
    key: 'voyages',
    label: 'Voyages',
    icon: <CarryOutOutlined />,
    color: '#2196F3',
    path: '/voyages',
  },
  
];

const Menu = () => {
  const location = useLocation();
  const activeTab = tabs.find(tab => location.pathname.startsWith(tab.path))?.key;

  return (
    <div className="menu-container">
      <div className="Menu">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          const tabStyle = {
            color: isActive ? tab.color : '#999',
          };
          const iconStyle = {
            fontSize: '1.2rem',
            marginRight: '0.5rem',
            ...tabStyle,
          };

          return (
            <Link to={tab.path} key={tab.key} style={{ textDecoration: 'none' }}>
              <button
                className={`tab ${isActive ? 'active' : ''}`}
                style={{ borderColor: isActive ? tab.color : 'transparent' }}
              >
                <span style={iconStyle}>{tab.icon}</span>
                <span style={tabStyle}>{tab.label}</span>
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
