import React from 'react';
import { Link } from 'react-router-dom';

const InnerNav = () => {
  return (
    <div className="dropdown-menu dropdown-menu-right show">
      <div className="user-email">
        <div className="user">
          <span className="thumb"><i className="bi bi-person"></i></span>
          <div className="user-info">
            <h6>Morrisson</h6>
            <span>quixlab.com@gmail.com</span>
          </div>
        </div>
      </div>
      <Link to="/account" className="dropdown-item">
        <i className="bi bi-cpu"></i> dashboard
      </Link>
      <Link to="/data" className="dropdown-item">
        <i className="bi bi-chat-text"></i> Chat
      </Link>
      <Link to="/settings" className="dropdown-item">
        <i className="bi bi-person-plus-fill"></i> Admin
      </Link>
      <Link to="/" className="dropdown-item logout">
        <i className="bi bi-file-person-fill"></i> Logout
      </Link>
    </div>
  );
};

export default InnerNav;
