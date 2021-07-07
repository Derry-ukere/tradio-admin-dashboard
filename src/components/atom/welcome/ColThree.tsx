import React from 'react';

const ColThree = () => {
  return (
    <div className="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Order Book</h4>
        </div>
        <div className="card-body order-book ps ps--active-y">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Price (USD)</th>
                <th scope="col">Price (BTC)</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-danger">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className="text-danger">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
            </tbody>
          </table>
          <div className="order-book-divider">
            <h6 className="text-danger"> <i className="la la-arrow-down" /> 6587.35</h6>
            <span>6520.220 / 4835.00</span>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Price (USD)</th>
                <th scope="col">Price (BTC)</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-success">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className="text-success">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className="text-success">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className="text-success">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
              <tr>
                <td className="text-success">10393.50</td>
                <td>0.010</td>
                <td>14.109</td>
              </tr>
            </tbody>
          </table>
          <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '285px' }} /></div></div>
      </div>
    </div>
  );
};

export default ColThree;
