import React from "react";
import "./homepage.style.scss";
import Directory from "../../components/directory/directory_comp";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-menubar"></div>
      <Directory />
    </div>
  );
};

export default HomePage;
