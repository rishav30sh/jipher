import React from "react";
import Directory from "../../components/directory/directory_comp";
import HomePageContainer from './homepage_style'
const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="homepage-menubar"></div>
      <Directory />
    </HomePageContainer>
  );
};
 
export default HomePage;
