import React from 'react';
import './Header.css';
import ResourceIndicator from "../game-components/resources/ResourceIndicator";

const Header = () => {
  return (
      <header className="App-header">
        <div className="logo-container">
          <h1 className="logo-text">SpaceGame</h1>
        </div>

        <div className="resources-container">
          <ResourceIndicator resourceType="metal" />

          <ResourceIndicator resourceType="crystal" />

          <ResourceIndicator resourceType="deutrium" />
        </div>

        <div className="reserved-container">

        </div>

      </header>
  );
};

export default Header;
