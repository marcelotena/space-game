import React, {useEffect} from 'react';
import { TOTAL_GALAXIES } from "../../utils/constants";
// Redux
import { connect } from 'react-redux';
import { getPlanets, navigateTo } from "../../actions/planets";
import { PREVIOUS_GALAXY, NEXT_GALAXY} from "../../actions/types";
import store from "../../store";

const GalaxyNavigation = ({ title, navigation, navigateTo }) => {
  const items = [];

  const renderItems = () => {
    for(let i = 1; i <= TOTAL_GALAXIES; i++) {
      items.push(
          <button className={`${parseInt(navigation.galaxy) === i ? 'active' : ''} item`} key={i} onClick={() => jumpToGalaxy(i)}>
            {i}
          </button>
      );
    }

    return items;
  };

  const handleNavigation = destination => {
    navigateTo(destination);
  };

  const jumpToGalaxy = async galaxyToJump => {
    store.dispatch(getPlanets(galaxyToJump, navigation.system));
  };

  useEffect(() => {
    store.dispatch(getPlanets(navigation.galaxy, navigation.system));
  }, [navigation.galaxy, navigation.system]);

  return (
      <div className="system-list-navigation galaxy-navigation">
        {parseInt(navigation.galaxy) > 1 ?
            <button className="ui icon button" onClick={() => handleNavigation(PREVIOUS_GALAXY)}>
              <i className="left arrow icon"></i>
            </button> :
            <button className="ui icon button disabled" onClick={() => handleNavigation(PREVIOUS_GALAXY)}>
              <i className="left arrow icon"></i>
            </button>
        }

        <div className="pagination-group">
          <div className="pagination-title">
            {title}
          </div>

          <div className="ui pagination menu">
            {renderItems()}
          </div>

        </div>


        {parseInt(navigation.galaxy) < TOTAL_GALAXIES ?
            <button className="ui icon button" onClick={() => handleNavigation(NEXT_GALAXY)}>
              <i className="right arrow icon"></i>
            </button> :
            <button className="ui icon button disabled" onClick={() => handleNavigation(NEXT_GALAXY)}>
              <i className="right arrow icon"></i>
            </button>
        }
      </div>
  );
};

export default connect(null, { navigateTo })(GalaxyNavigation);
