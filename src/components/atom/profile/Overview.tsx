import React from 'react';

interface proptype {
  overviewFunc : () => void
  viewDepositFunc : () => void
  viewWithDrawFunc : () => void
  viewAffiliate : () => void

}
const Overview = (props : proptype) => {
  return (
    <div className="col-xl-12">
      <div className="card sub-menu">
        <div className="card-body active">
          <ul className="d-flex show">
            <li className="nav-item active" onClick = {props.overviewFunc}>
              <a href="#" className="nav-link active" >
                <i className="bi bi-bricks"></i>
                <span>Overview</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.viewDepositFunc}>
              <a href="#" className="nav-link" >
                <i className="bi bi-currency-bitcoin"></i>
                <span>Deposit</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.viewWithDrawFunc}>
              <a href="#" className="nav-link" >
                <i className="bi bi-currency-exchange"></i>
                <span>Withdraw</span>
              </a>
            </li>
            <li className="nav-item" onClick = {props.viewAffiliate}>
              <a href="#" className="nav-link" >
                <i className="bi bi-node-plus"></i>
                <span>Affiliate</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Overview;
