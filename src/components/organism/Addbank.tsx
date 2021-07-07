import React from 'react';
import { Link } from 'react-router-dom';

const Addbank = () => { 
  return (
    <div className="col-xl-7">
      <div className="auth-form card">
        <div className="card-header">
          <h4 className="card-title">Add New Account</h4>
        </div>
        <div className="card-body py-0">
          <div className="add-bank-card">
            <div className="row my-4">
              <div className="col-md-6">
                <Link to="/bank-form" className="d-block">
                  <div className="media">
                    <span className="mr-3"><i className="bi bi-bank" /></span>
                    <div className="media-body">
                      <h4 className="mt-0 mb-3">Bank account</h4>
                      <p>Use bank account to make purchase and sells. Prices are
                      locked today. Trades may take 4-5 days to process</p>
                      <p className="text-muted">Recommended for invest large amount</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link to="/card-form" className="d-block">
                  <div className="media">
                    <span className="mr-3"><i className="bi bi-credit-card-2-back" /></span>
                    <div className="media-body">
                      <h4 className="mt-0 mb-3">Debit card</h4>
                      <p>Use any visa or mastercard debit card to make small
                      investment. Add a bank or wallet to sell</p>
                      <p className="text-muted">Recommended for invest small amount</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addbank;
