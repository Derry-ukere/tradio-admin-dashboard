import React from 'react';

const Limit = () => {
  return (
    <div className="tab-pane fade active show" id="limit" role="tabpanel">
      <form method="post" name="myform" className="currency_limit">
        <div className="form-group">
          <div className="input-group mb-3">
            <select name="currency" className="form-control mw-150" style={{display: 'none'}}>
              <option data-display="Bitcoin" value="bitcoin">Bitcoin
              </option>
              <option value="litecoin">Litecoin</option>
            </select><div className="nice-select form-control mw-150" tabIndex={0}><span className="current">Bitcoin</span><ul className="list"><li data-value="bitcoin" data-display="Bitcoin" className="option selected">Bitcoin
            </li><li data-value="litecoin" className="option">Litecoin</li></ul></div>
            <input type="text" name="usd_amount" className="form-control text-right" placeholder="Enter Size" />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">USD</span>
            </div>
            <input type="text" name="currency_amount" className="form-control text-right" placeholder= '501458' />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">USD</span>
            </div>
            <input type="text" name="currency_amount" className="form-control text-right" placeholder= '501458' />
          </div>
        </div>
        <ul className="list-group limit-nested ps ps--active-y">
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
           Post Only
            <label className="toggle mb-0">
              <input className="toggle-checkbox" type="checkbox" defaultChecked />
              <span className="toggle-switch" />
            </label>
          </li>
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
          Size in BTC
            <strong className="strong"> 0.00254 BTC</strong>
          </li>
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
          Order Value
            <strong className="strong">65850 USD</strong>
          </li>
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
         Available Margin
            <strong className="strong">15458 USD</strong>
          </li>
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
        Buy Cost @ 1.0x
            <strong className="strong">0.00 USD</strong>
          </li>
          <li className="list-group-item border-0 px-0 py-1 d-flex justify-content-between align-items-center">
        Sell Cost @ 1.0x
            <strong className="strong">0.00 USD</strong>
          </li>
          <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} /></div><div className="ps__rail-y" style={{top: '0px', height: '210px', right: '0px'}}><div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '202px'}} /></div></ul> 
      </form>
    </div>

  );
};

export default Limit;
