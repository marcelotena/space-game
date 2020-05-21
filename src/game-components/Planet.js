import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { generatePlanetType, generatePlanetPosition, generatePlanetImage } from './constants/planetTypes';

const Planet = () => {
  const [planet, setPlanet] = useState({
    id: '',          // generated - String
    name: '',        // set by user - String
    type: {
      code: '',     // a, b, c, d, e, f, g - String
      name: ''      // desert, dry, normal, jungle, oceanic, ice, gas - String
    },
    usedSlots: 0,
    slots: 0,       // 50 - 320 - Number
    position: {
      galaxy: 0,  // 1 - 5 - Number
      system: 0,  // 1 - 499 - Number
      position: 0 // 1 - 15 - Number
    },
    imageSystem: '' // 01 - 10 - String
  });

  const generatePlanet = (position) => {
    switch(position) {
      case 1:
      case 2:
      case 3:
        return {
          id: uuid(),
          name: 'Unnamed planet',
          type: generatePlanetType(0, 1),
          usedSlots: 0,
          slots: 50,
          position: generatePlanetPosition(position),
          imageSystem: generatePlanetImage()
        };
      default:
        return {
          id: uuid(),
          name: 'Unnamed planet',
          type: generatePlanetType(0, 15),
          usedSlots: 0,
          slots: 50,
          position: generatePlanetPosition(position),
          imageSystem: generatePlanetImage()
        };
    }
  };

  const planets = [];
  for(let i=0; i<12; i++ ) {
    planets[i] = generatePlanet(1);
  }

  return (
      <div>
        <ul>
          {planets.map(planet =>
            <li style={{ float: 'left', listStyle: 'none', padding: 0, margin: '15px', width: '29%' }}>
              <div><img src={`/planet/system/${planet.position.position}/${planet.imageSystem}${planet.type.code}.jpg`} alt=""/></div>
              <div>ID: {planet.id}</div>
              <div>Name: {planet.name}</div>
              <div>Type: {planet.type.code} | {planet.type.name}</div>
              <div>Slots: {planet.usedSlots} / {planet.slots}</div>
              <div>Position: [{planet.position.galaxy}:{planet.position.system}:{planet.position.position}]</div>
            </li>
          )}
        </ul>
      </div>
  );
};

export default Planet;
