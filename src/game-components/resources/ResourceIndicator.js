import React from 'react';
import './ResourceIndicator.css';

const ResourceIndicator = ({ resourceType }) => {
  return (
      <div className="resource-container">
        <div className="resource-image">
          <img src={`/resources/${resourceType}.png`} alt={resourceType} />
        </div>
        <div className="resource-value">1.000.000</div>
      </div>
  );
};

export default ResourceIndicator;
