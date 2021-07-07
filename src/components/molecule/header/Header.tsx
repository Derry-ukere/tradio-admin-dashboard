import React, { useState } from 'react';
import InnerNav from '../inner-nav/InnerNav';
import { Link } from 'react-router-dom';


const Header = () => {
  const [show, setshow] = useState(false);

  const handleClick = () => {
    setshow((prev) => !prev);
  };




  return (
    <div className="header dashboard animated slideInDown fixed">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
              <Link className="navbar-brand" to="/dashboard"><img src='./logo.png' alt="logo" /></Link>
              <div className="header-right d-flex my-2 align-items-center">
                <div className="language">
                  <div className="dropdown">
                    <div className="icon" data-toggle="dropdown">
                      <i className="flag-icon flag-icon-us" />
                      <span>English</span>
                    </div>
                  </div>
                </div>
                <div className="dashboard_log" onClick={handleClick}>
                  <div className="profile_log dropdown">
                    <div className="user" data-toggle="dropdown">
                      <span className="thumb"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg></span>
                      <span className="arrow"><i className="la la-angle-down" /></span>
                    </div>
                    {show && <InnerNav />}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
