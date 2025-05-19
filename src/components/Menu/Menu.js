import React, { useState } from 'react';
import { EnvironmentOutlined, CarryOutOutlined } from '@ant-design/icons';
import './Menu.css';

const tabs = [
  {
    key: 'carte',
    label: 'Carte',
    icon: <EnvironmentOutlined />,
    color: '#4CAF50', // vert
  },
  {
    key: 'voyages',
    label: 'Voyages',
    icon: <CarryOutOutlined />,
    color: '#2196F3', // bleu
  },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState('carte');

  return (
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
          <button
            key={tab.key}
            className={`tab ${isActive ? 'active' : ''}`}
            style={{ borderColor: isActive ? tab.color : 'transparent' }}
            onClick={() => setActiveTab(tab.key)}
          >
            <span style={iconStyle}>{tab.icon}</span>
            <span style={tabStyle}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
