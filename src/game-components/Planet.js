import React from 'react';
import './Planet.css';

const Planet = ({ planet }) => {

  const { name, type, position, imageSystem } = planet;
  /* PLANET PROPERTIES
  const planet = {
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
  };*/

  return (
      <div className="planet-row">
        <div className="planet-position">{position.position}</div>
        <div className="planet-image"><img src={`/planet/system/${position.position}/${imageSystem}${type.code}.jpg`} alt={type.name} /></div>
        <div className="planet-name">[ {type.name} ]</div>
        <div className="planet-owner">[{position.galaxy}:{position.system}:{position.position}]</div>
        <div className="planet-alliance">Alliance name</div>
      </div>
  );
};

export default Planet;
