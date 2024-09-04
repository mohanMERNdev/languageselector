import React from 'react';
import './MenuItem.css';

const MenuItem = ({title }) => {
  return (
    <div className="menu-item">
      <div className="image-container">
        <img src="https://cdn.pixabay.com/photo/2016/08/17/04/39/template-1599663_1280.png" alt="Home" className="full-screen-image" />
        <div className="overlay">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
