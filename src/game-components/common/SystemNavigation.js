import React from 'react';
import {TOTAL_SYSTEMS} from "../../utils/constants";
// Redux
import { connect } from 'react-redux';
import store from "../../store";
import { getPlanets, navigateTo } from "../../actions/planets";
import {PREVIOUS_SYSTEM, NEXT_SYSTEM } from "../../actions/types";

const SystemNavigation = ({ title, navigation, navigateTo }) => {

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
                <button className="item" onClick={() => jumpToSystem(parseInt(navigation.system) - 1)}>
                  {parseInt(navigation.system) === TOTAL_SYSTEMS ? parseInt(navigation.system) - 2 : parseInt(navigation.system) - 1}
                </button> :
                <button className="active item" onClick={() => jumpToSystem(parseInt(navigation.system))}>
                  {parseInt(navigation.system)}
                </button>
            }

            {parseInt(navigation.system) !== 1 ?
                <button className={`${parseInt(navigation.system) !== TOTAL_SYSTEMS ? 'active' : ''} item`} onClick={() => jumpToSystem(parseInt(navigation.system) - 1)}>
                  {parseInt(navigation.system) === TOTAL_SYSTEMS ? parseInt(navigation.system) - 1 : parseInt(navigation.system)}
                </button> :
                <button className="item" onClick={() => jumpToSystem(parseInt(navigation.system))}>
                  {parseInt(navigation.system) + 1}
                </button>
            }

            {parseInt(navigation.system) + 1 <= TOTAL_SYSTEMS ?
                <button className="item" onClick={() => jumpToSystem(parseInt(navigation.system) + 1)}>
                  {parseInt(navigation.system) === 1 ? parseInt(navigation.system) + 2 : parseInt(navigation.system) + 1}
                </button> :
                <button className="active item">
                  {parseInt(navigation.system)}
                </button>
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
