import React from 'react';
import './Planet.css';

const Planet = ({ planet }) => {

  const { coordinates, planetInfo, resources } = planet;

  return (
      <div className="planet-row">
        <div className="planet-position">{coordinates.position}</div>
        <div className="planet-image"><img src={`/planet/system/${coordinates.position}/${planetInfo.imageSystem}${planetInfo.planetType.code}.jpg`} alt={planetInfo.planetType.name} /></div>
        <div className="planet-name">[ {planetInfo.planetType.name} | {planetInfo.fields} fields ]</div>
        <div className="planet-owner">[{coordinates.galaxy}:{coordinates.system}:{coordinates.position}]</div>
        <div className="planet-alliance">[M: {resources.metal}, C: {resources.crystal}, D: {resources.deuterium}]</div>
      </div>
  );
};

export default Planet;
