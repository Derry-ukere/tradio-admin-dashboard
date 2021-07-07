import React from 'react';


interface proptypes {
  handleshow: () => void
  handleRate: () => void
  handleInsurance: () => void
}


const Header = (props: proptypes) => {
  return (
    <div className="col-xl-12">
      <div className="card sub-menu">
        <div className="card-body active">
          <ul className="d-flex show">
            <li className="nav-item active" onClick = {props.handleshow}>
              <a href="#" className="nav-link active"> 
                <i className="bi bi-stack" />
                <span>TBI</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.handleRate}>
              <a href="#" className="nav-link">
                <i className="bi bi-bar-chart-steps" />
                <span>Funding Rate</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.handleInsurance}>
              <a href="#" className="nav-link">
                <i className="bi bi-bezier" />
                <span>Insurance Found</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Header;
