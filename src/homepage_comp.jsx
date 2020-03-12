import React from "react";
import './homepage.style.scss'
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-menubar"></div>

      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className='title'> HATS</h1>
            <span className='subtitle'>SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;