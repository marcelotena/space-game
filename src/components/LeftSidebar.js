import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './LeftSidebar.css';

const LeftSidebar = () => {
  const location = useLocation();

  return (
      <div className="App-left-sidebar">
        <div className="ui vertical menu">
          <Link to='/login' className={`${location.pathname === '/login' ? 'active' : ''} item`}>
            Login
          </Link>
          <Link to='/register' className={`${location.pathname === '/register' ? 'active' : ''} item`}>
            Register
          </Link>
          <Link to='/galaxy' className={`${location.pathname === '/galaxy' ? 'active' : ''} item`}>
            Galaxy
          </Link>
        </div>
      </div>
  );
};

export default LeftSidebar;
