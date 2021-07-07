import React from 'react';
import {Link} from 'react-router-dom';

const Bank = () => {
  return (
    <div className="col-xl-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Bank and Card Details</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table linked_account ">
              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <span className="mr-3"><i className="bi bi-bank" /></span>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Bank of America</h5>
                        <p>Bank **************5421</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="edit-option">
                      <Link to="/bank-form"><i className="bi bi-pencil-fill" /></Link>
                    </div>
                  </td>
                  <td>
                    <div className="verify">
                      <div className="verified">
                        <span><i className="bi bi-check-lg" /></span>
                        <a href="#">Verified</a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <span className="mr-3"><i className="bi bi-credit-card" /></span>
                      <div className="media-body">
                        <h5 className="mt-0 mb-1">Debit Card</h5>
                        <p>Prepaid Card *********5478</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="edit-option">
                      <Link to="/card-form"><i className="bi bi-pencil-fill" /></Link>
                      <a href="#"><i className="bi bi-trash" /></a>
                    </div>
                  </td>
                  <td>
                    <div className="verify">
                      <div className="not-verify">
                        <span><i className="bi bi-x-lg" /></span>
                        <a href="#">Not verified</a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-3">
              <Link to="/add-bank" className="btn btn-primary px-4 py-2 mr-3 my-2">Add Bank
          Account</Link>
              <Link to="/add-bank" className="btn btn-success px-4 py-2 my-2">Add Debit
          Account</Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Bank;
