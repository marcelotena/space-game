import React from 'react';
import {TOTAL_SYSTEMS} from "../../utils/constants";
// Redux
import { connect } from 'react-redux';
import store from "../../store";
import { getPlanets, navigateTo } from "../../actions/planets";
import {PREVIOUS_SYSTEM, NEXT_SYSTEM } from "../../actions/types";

const SystemNavigation = ({ title, navigation }) => {

  const handleNavigation = destination => {
    navigateTo(destination);
  };

  const jumpToSystem = async systemToJump => {
    store.dispatch(getPlanets(navigation.galaxy, systemToJump));
  };

  return (
      <div className="system-list-navigation galaxy-navigation">
        {parseInt(navigation.system) > 1 ?
            <button className="ui icon button" onClick={() => handleNavigation(PREVIOUS_SYSTEM)}>
              <i className="left arrow icon"></i>
            </button> :
            <button className="ui icon button disabled" onClick={() => handleNavigation(PREVIOUS_SYSTEM)}>
              <i className="left arrow icon"></i>
            </button>
        }

        <div className="pagination-group">
          <div className="pagination-title">
            {title}
          </div>

          <div className="ui pagination menu">
            {parseInt(navigation.system) - 1 >= 1 ?
                <a className="item" onClick={() => jumpToSystem(parseInt(navigation.system) - 1)}>
                  {parseInt(navigation.system) - 1}
                </a> :
                ''
            }

            <a className={`active item`} onClick={() => jumpToSystem(parseInt(navigation.system))}>
              {parseInt(navigation.system)}
            </a>

            {parseInt(navigation.system) + 1 <= TOTAL_SYSTEMS ?
                <a className="item" onClick={() => jumpToSystem(parseInt(navigation.system) + 1)}>
                  {parseInt(navigation.system) + 1}
                </a> :
                ''
            }

          </div>
        </div>


        {parseInt(navigation.system) < TOTAL_SYSTEMS ?
            <button className="ui icon button" onClick={() => handleNavigation(NEXT_SYSTEM)}>
              <i className="right arrow icon"></i>
            </button> :
            <button className="ui icon button disabled" onClick={() => handleNavigation(NEXT_SYSTEM)}>
              <i className="right arrow icon"></i>
            </button>
        }
      </div>
  );
};

export default connect(null, { navigateTo })(SystemNavigation);
