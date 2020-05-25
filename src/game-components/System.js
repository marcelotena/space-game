import React, { useEffect, useState } from 'react';
import './System.css';
import Planet from "./Planet";
import GalaxyNavigation from './common/GalaxyNavigation';
import SystemNavigation from "./common/SystemNavigation";
import store from "../store";
import { connect } from 'react-redux';
import { getPlanets } from "../actions/planets";

const System = ({ planets, navigation }) => {
  const [ warpForm, setWarpFormData ] = useState({
    galaxyToWarp: 1,
    systemToWarp: 3
  });

  const { galaxyToWarp, systemToWarp} = warpForm;

  useEffect(() => {
    store.dispatch(getPlanets(1, 3));
  }, []);

  const onChange = e =>
      setWarpFormData({ ...warpForm, [e.target.name]: e.target.value });

  const warpToSystem = async e => {
    e.preventDefault();

    store.dispatch(getPlanets(galaxyToWarp, systemToWarp));
  };

  return (
      <div className="system-list-container">

        <div className="system-navigation">

          <GalaxyNavigation navigation={navigation} title="Galaxy" />

          <SystemNavigation navigation={navigation} title="System" />

        </div>


        <ul className="system-list">
          <li className="system-list-header">
            <div className="planet-position-header">Planet</div>
            <div className="planet-name-header">Name</div>
            <div className="planet-owner-header">Player</div>
            <div className="planet-alliance-header">Alliance</div>
          </li>
          {planets.map(planet =>
              <li className="system-list-item" key={planet._id}>
                <Planet planet={planet} />
              </li>
          )}
        </ul>



        <form className="system-list-navigation warp-pagination" onSubmit={e => warpToSystem(e)}>
          <div className="pagination-title">
            Warp to
          </div>

          <div className="ui left labeled input">
            <label htmlFor="galaxy" title="Galaxy" className="ui label">G</label>
            <input
                type="text"
                title="Galaxy"
                id="galaxy"
                name="galaxyToWarp"
                onChange={e => onChange(e)}
                value={galaxyToWarp} />
          </div>

          <div className="coordinates-separator">:</div>

          <div className="ui left labeled input">
            <label htmlFor="system" title="System" className="ui label">S</label>
            <input
                type="text"
                title="System"
                id="system"
                name="systemToWarp"
                onChange={e => onChange(e)}
                value={systemToWarp} />
          </div>

          <button className="ui icon button" type="submit">
            <i className="right arrow icon"></i>
          </button>
        </form>
      </div>
  );
};

const mapStateToProps = state => ({
  planets: state.planets.planets,
  navigation: state.planets.navigation
});

export default connect(mapStateToProps)(System);
