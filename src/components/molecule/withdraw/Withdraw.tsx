import React from 'react';

const Withdraw = () => {
  return (
    <>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Withdraw</h4>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <form action="#" className="py-5">
                  <div className="form-group row align-items-center">
                    <div className="col-sm-4">
                      <label htmlFor="inputEmail3" className="col-form-label">DestinationAddress
                        <br />
                        <small>Please double check this address</small>
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label className="input-group-text  bg-primary"><i className="bi bi-currency-bitcoin"></i></label>
                        </div>
                        <input type="text" className="form-control text-right" placeholder="5000 USD" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <div className="col-sm-4">
                      <label htmlFor="inputEmail3" className="col-form-label">Amount BTC
                        <br />
                        <small>Maximum amount withdrawable: 0 BTC</small>
                      </label>
                    </div>
                    <div className="col-sm-8">
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <label className="input-group-text bg-primary"><i className="bi bi-currency-exchange" /></label>
                        </div>
                        <input type="text" className="form-control text-right" placeholder="5000 USD" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group row align-items-center">
                    <div className="col-sm-6">
                      <label htmlFor="inputEmail3" className="col-form-label">Bitcoin Network Fee
                  (BTC)
                      <br />
                      <small>Transactions on the Bitcoin network are priorirized by
                    fees</small>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <h4 className="text-right">0.005</h4>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="btn btn-primary">Withdraw Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Important Information</h4>
          </div>
          <div className="card-body">
            <div className="important-info">
              <ul>
                <li>
                  <i className="bi bi-dash-circle-fill" />
            For security reasons, Tradio process withdrawals by review once a day. For
            more information in this policy. Please see our wallet security page.
                </li>
                <li>
                  <i className="bi bi-dash-circle-fill" />
            Submit your withdrawals by 07:00 UTC +00 (about 11 hour) to be included in
            the days batch
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>   
    </>
  );
};

export default Withdraw;
