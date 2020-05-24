import React, {useEffect} from 'react';
import './System.css';
import Planet from "./Planet";
import store from "../store";
import { connect } from 'react-redux';
import { getPlanets } from "../actions/planets";

const System = ({ planets, navigation }) => {

  useEffect(() => {
    store.dispatch(getPlanets(1, 2));
  }, []);

  return (
      <div className="system-list-container">

        <div className="system-navigation">
          <div className="system-list-navigation galaxy-navigation">
            <button className="ui icon button">
              <i className="left arrow icon"></i>
            </button>

            <div className="pagination-group">
              <div className="pagination-title">
                Galaxy
              </div>

              <div className="ui pagination menu">
                <a className={`${navigation.galaxy > 1 ? '' : 'active'} item`}>
                  {navigation.galaxy > 1 ? navigation.galaxy - 1 : 1}
                </a>
                <a className={`${navigation.galaxy > 1 ? 'active' : ''} item`}>
                  {navigation.galaxy > 1 ? navigation.galaxy : 2}
                </a>
                <a className="item">
                  {navigation.galaxy > 1 ? navigation.galaxy + 1 : 3}
                </a>
              </div>
            </div>


            <button className="ui icon button">
              <i className="right arrow icon"></i>
            </button>
          </div>

          <div className="system-list-navigation">
            <button className="ui icon button">
              <i className="left arrow icon"></i>
            </button>

            <div className="pagination-group">
              <div className="pagination-title">
                System
              </div>

              <div className="ui pagination menu">
                <a className={`${navigation.system > 1 ? '' : 'active'} item`}>
                  {navigation.system > 1 ? navigation.system - 1 : 1}
                </a>
                <a className={`${navigation.system > 1 ? 'active' : ''} item`}>
                  {navigation.system > 1 ? navigation.system : 2}
                </a>
                <a className="item">
                  {navigation.system > 1 ? navigation.system + 1 : 3}
                </a>
              </div>
            </div>

            <button className="ui icon button">
              <i className="right arrow icon"></i>
            </button>
          </div>
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

        <div className="system-list-navigation warp-pagination">
          <div className="pagination-title">
            Warp to
          </div>

          <div className="ui left labeled input">
            <label htmlFor="galaxy" title="Galaxy" className="ui label">G</label>
            <input type="text" title="Galaxy" id="galaxy" />
          </div>

          <div className="coordinates-separator">:</div>

          <div className="ui left labeled input">
            <label htmlFor="system" title="System" className="ui label">S</label>
            <input type="text" title="System" id="system" />
          </div>

          <button className="ui icon button">
            <i className="right arrow icon"></i>
          </button>
        </div>
      </div>
  );
};

const mapStateToProps = state => ({
  planets: state.planets.planets,
  navigation: state.planets.navigation
});

export default connect(mapStateToProps)(System);
