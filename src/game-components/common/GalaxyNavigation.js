import React from 'react';
import { TOTAL_GALAXIES } from "../../utils/constants";

const GalaxyNavigation = ({ title, navigation }) => {
  const items = [];

  const renderItems = () => {
    for(let i = 1; i <= TOTAL_GALAXIES; i++) {
      items.push(
          <a className={`${parseInt(navigation.galaxy) === i ? 'active' : ''} item`} key={i}>
            {i}
          </a>
      );
    }

    return items;
  };

  return (
      <div className="system-list-navigation galaxy-navigation">
        <button className="ui icon button">
          <i className="left arrow icon"></i>
        </button>

        <div className="pagination-group">
          <div className="pagination-title">
            {title}
          </div>

          <div className="ui pagination menu">
            {renderItems()}
          </div>

        </div>


        <button className="ui icon button">
          <i className="right arrow icon"></i>
        </button>
      </div>
  );
};

export default GalaxyNavigation;
