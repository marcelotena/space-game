import React from 'react';
import './System.css';
import { generatePlanet } from './helpers/planet';
import Planet from "./Planet";

const System = () => {

  const planets = [];
  for(let i=0; i<12; i++ ) {
    planets[i] = generatePlanet(1);
  }

  return (
      <div>
        <h3>System</h3>

        <ul className="system-list">
          <li className="system-list-header">
            <div className="planet-position-header">Planet</div>
            <div className="planet-name-header">Name</div>
            <div className="planet-owner-header">Player</div>
            <div className="planet-alliance-header">Alliance</div>
          </li>
          {planets.map(planet =>
              <li className="system-list-item">
                <Planet key={planet.id} planet={planet} />
              </li>
          )}
        </ul>
      </div>
  );
};

export default System;
