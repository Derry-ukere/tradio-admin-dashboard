import React  from 'react';

const DebitCard = () => {
  


  return (
    <div className="tab-pane fade active show" id="tab1">
      <div className="qrcode">
        <img src="./qr.svg" alt="" width={150} />
      </div>
      
      <div className="input-group-append">
        <span className="input-group-text bg-primary text-white" >Debit Card Button</span>
      </div> 

      <ul>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              You must a Bit-Pay app on your mobile phone or web interface to automatically carry out transfer.
        </li>
        <li>
          <i className="bi bi-dash-circle-dotted" />
              Bit-pay bitcoin network transfers will be credited to your Tradio account automatically
        </li>
      </ul>
    </div>
  );
};

export default DebitCard;

