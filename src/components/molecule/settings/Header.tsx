import React from 'react';

interface proptype {
  showProfile : () => void
  showBank : () => void
  showSecurity : () => void
}

const Header = (props : proptype) => {
  return (
    <div className="col-xl-12">
      <div className="card sub-menu">
        <div className="card-body active">
          <ul className="d-flex show">
            <li className="nav-item" onClick = {props.showProfile}>
              <a href="#" className="nav-link">
                <i className="bi bi-person-badge" />
                <span>Edit Client Details</span>
              </a>
            </li>
            <li className="nav-item active" onClick = {props.showSecurity}>
              <a href="#" className="nav-link active">
                <i className="bi bi-shield-lock" />
                <span>View IDs</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.showBank}>
              <a href="#" className="nav-link">
                <i className="bi bi-bank" />
                <span>View Bank Details</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
