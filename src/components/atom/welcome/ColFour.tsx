import React from 'react';

const ColFour = () => {
  return (
    <div className="col-xl-2 col-lg-4 col-md-6 col-xxl-4">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Trade History</h4>
            </div>
            <div className="card-body trade-history ps ps--active-y">
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Price</th>
                      <th scope="col">Size</th>
                      <th scope="col">Time</th>
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
              </div>
              <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '400px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '250px' }} /></div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColFour;
