import React from 'react';

const Wallet = () => {
  return (
    <div className="col-xl-6 col-lg-6 col-md-6">
      <div className="card acc_balance">
        <div className="card-header">
          <h4 className="card-title">Wallet</h4>
        </div>
        <div className="card-body">
          <span>Available BTC</span>
          <h3>0.0230145 BTC</h3>
          <div className="d-flex justify-content-between my-3">
            <div>
              <p className="mb-1">Total Equity</p>
              <h4>78950.35 USD</h4>
            </div>
            <div>
              <p className="mb-1">Available Margin</p>
              <h4>56845.25 USD</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between my-3">
            <div>
              <p className="mb-1">Buy this month</p>
              <h4>3.0215485 BTC</h4>
            </div>
            <div>
              <p className="mb-1">Sell this month</p>
              <h4>3.0215485 BTC</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
