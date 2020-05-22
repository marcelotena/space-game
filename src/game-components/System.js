import React from 'react';
import './System.css';
import { generatePlanet } from './helpers/planet';
import Planet from "./Planet";

const System = () => {

  const system = {
    galaxy: 2,
    position: 127
  };

  const planets = [];
  for(let i=1; i<=15; i++ ) {
    planets[i] = generatePlanet(i);
  }

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
                <a className="item">
                  {system.galaxy - 1}
                </a>
                <a className="active item">
                  {system.galaxy}
                </a>
                <a className="item">
                  {system.galaxy + 1}
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
                <a className="item">
                  {system.position - 2}
                </a>
                <a className="item">
                  {system.position - 1}
                </a>
                <a className="active item">
                  {system.position}
                </a>
                <a className="item">
                  {system.position + 1}
                </a>
                <a className="item">
                  {system.position + 2}
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
              <li className="system-list-item" key={planet.id}>
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

export default System;
