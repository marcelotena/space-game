import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import { generatePlanetType, generatePlanetPosition } from './constants/planetTypes';

const Planet = () => {
  const [planet, setPlanet] = useState({
    id: '',     // generated - String
    name: '',   // set by user - String
    type: {
      code: '', // a, b, c, d, e, f, g - String
      name: ''  // desert, dry, normal, jungle, oceanic, ice, gas - String
    },
    slots: 0, // 50 - 320 - Number
    position: {
      galaxy: 0,  // 1 - 5 - Number
      system: 0,  // 1 - 499 - Number
      position: 0 // 1 - 15 - Number
    }
  });

  const generatePlanet = (position) => {
    switch(position) {
      case 1:
        return {
          id: uuid(),
          name: 'Unnamed planet',
          type: generatePlanetType(0, 1),
          slots: 50,
          position: generatePlanetPosition()
        };
      default:
        return {
          id: uuid(),
          name: 'Unnamed planet',
          type: generatePlanetType(0, 15),
          slots: 50,
          position: generatePlanetPosition()
        };
    }
  };

  return (
      <div>

      </div>
  );
};

export default Planet;
