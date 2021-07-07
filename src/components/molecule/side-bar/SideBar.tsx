import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="menu active">
        <ul className="show">
          <li className="active">
            <Link to="/dashboard" data-toggle="tooltip" data-placement="right" data-original-title="Trade" className="active">
              <span><i className="bi bi-cpu"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/chat" data-toggle="tooltip" data-placement="right" data-original-title="Exchange">
              <span><i className="bi bi-chat-text"></i></span>
            </Link>
          </li>
          <li>
            <Link to="/add-admin" data-toggle="tooltip" data-placement="right" data-original-title="Accounts">
              <span><i className="bi bi-person-plus-fill"></i></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>

  );
};

export default SideBar;
