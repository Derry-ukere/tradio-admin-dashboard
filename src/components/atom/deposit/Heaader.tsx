import React from 'react';

interface proptypes {
  Walet: () => void
  BitPay: () => void
  DebitCard: () => void
}
const Heaader = (props:proptypes) => {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" onClick = {props.DebitCard}>
        <a className="nav-link active"  data-toggle="tab" >Debit Card</a>
      </li>
      <li className="nav-item" onClick = {props.BitPay}>
        <a className="nav-link"  data-toggle="tab" >Bit Pay</a>
      </li>
      <li className="nav-item" onClick = {props.Walet}>
        <a className="nav-link"  data-toggle="tab" >Wallet</a>
      </li>
    </ul>
  );
};

export default Heaader;
