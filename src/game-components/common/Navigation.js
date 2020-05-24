import React from 'react';

const Navigation = ({ title, navigation, item }) => {
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
            <a className={`${navigation[item] > 1 ? '' : 'active'} item`}>
              {parseInt(navigation[item]) > 1 ? parseInt(navigation[item]) - 1 : 1}
            </a>
            <a className={`${navigation[item] > 1 ? 'active' : ''} item`}>
              {parseInt(navigation[item]) > 1 ? parseInt(navigation[item]) : 2}
            </a>
            <a className="item">
              {parseInt(navigation[item]) > 1 ? parseInt(navigation[item]) + 1 : 3}
            </a>
          </div>
        </div>


        <button className="ui icon button">
          <i className="right arrow icon"></i>
        </button>
      </div>
  );
};

export default Navigation;
