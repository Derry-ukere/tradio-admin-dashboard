import React from 'react';
import {Link} from 'react-router-dom';


const History = () => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">All Clients</h4>
        </div>
        <div className="card-body">
          <div className="transaction-table">
            <div className="table-responsive">
              <table className="table table-striped mb-0 table-responsive-sm">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Amount</th>
                    <th>Location</th>
                    <th>Balance</th>
                    <th></th>
                    <th></th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                    <td>
                      <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                    </td>
                    <td>
                      <Link to = '/settings'><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                    <td>
                      <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                    </td>
                    <td>
                      <Link to = '/settings'><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                    <td>
                      <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                    </td>
                    <td>
                      <Link to = '/settings'><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                    <td>
                      <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                    </td>
                    <td>
                      <Link to = '/settings'><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                    </td>
                  </tr>
                  <tr>
                    <td>#565845522</td>
                    <td>January 10, 2020</td>
                    <td>Realized P&amp;L</td>
                    <td>0.254782 BTC</td>
                    <td>Completed</td>
                    <td>0.125476 BTC</td>
                    <td>
                      <button className="btn btn-success waves-effect px-4" style = {{ backgroundColor : 'red'}}> <a href="#"><i className="bi bi-trash" /></a></button>
                    </td>
                    <td>
                      <Link to = '/settings'><button className="btn btn-success waves-effect px-4">Edit</button></Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
