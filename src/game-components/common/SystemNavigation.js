import React from 'react';
import { TOTAL_SYSTEMS } from "../../utils/constants";

const SystemNavigation = ({ title, navigation }) => {
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
            {parseInt(navigation.system) - 1 >= 1 ?
                <a className="item">
                  {parseInt(navigation.system) - 1}
                </a> :
                ''
            }

            <a className={`active item`}>
              {parseInt(navigation.system)}
            </a>

            {parseInt(navigation.system) + 1 <= TOTAL_SYSTEMS ?
                <a className="item">
                  {parseInt(navigation.system) + 1}
                </a> :
                ''
            }

          </div>
        </div>


        <button className="ui icon button">
          <i className="right arrow icon"></i>
        </button>
      </div>
  );
};

export default SystemNavigation;
