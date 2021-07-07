import React from 'react';

const Bills = () => {
  return (
    <div className="col-xl-12">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Maintainance</p>
              <h4>0.03654 BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Unrealized P&amp;L</p>
              <h4>0.03654 BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Open Positions</p>
              <h4>0.03654 BTC</h4>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
          <div className="card text-center pt-2">
            <div className="card-body">
              <p className="mb-1">Active Orders</p>
              <h4>0.03654 BTC</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bills;
