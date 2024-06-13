import React, { useState, useEffect } from 'react';
import './Tabla.css';  // Importamos el archivo CSS para las animaciones

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const handleTabClick = (index, callback) => {
    setAnimationClass('tab-content-exit');
    setTimeout(() => {
      setActiveTab(index);
      setAnimationClass('tab-content-enter');
      if (callback) {
        callback();
      }
    }, 300); // Duración de la animación de salida
  };

  useEffect(() => {
    if (animationClass === 'tab-content-enter') {
      setTimeout(() => {
        setAnimationClass('');
      }, 300); // Duración de la animación de entrada
    }
  }, [animationClass]);

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-header ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index, tab.onClick)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-content ${activeTab === index ? 'active' : ''} ${animationClass}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
