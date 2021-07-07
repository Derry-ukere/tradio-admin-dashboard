import React from 'react';

const ColFive = () => {
  return (
    
    <div className="col-xl-2 col-lg-4 col-xxl-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Your Portfolio </h4>
        </div>
        <div className="card-body balance-widget ps ps--active-y">
          <div className="total-balance">
            <h3>$ 63411.00</h3>
            <h6>Total Balance</h6>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Size</th>
                  <th>USD</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>BTC</td>
                  <td>0.000242</td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>LTC</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XRP</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>ETH</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>XTZ</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>EOS</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>Dash</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
                <tr>
                  <td>USDT</td>
                  <td>0.000242 </td>
                  <td>0.125 USD</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ps__rail-x" style={{ left: '0px', bottom: '-26px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '26px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '25px', height: '375px' }} /></div></div>
      </div>
    </div>
  );
};

export default ColFive;
