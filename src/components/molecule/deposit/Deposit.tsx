import React, {useState} from 'react';
import WalletPay from '../../atom/deposit/WalletPay';
import BitPay from '../../atom/deposit/BitPay';
import DebitCard from '../../atom/deposit/DebitCard';
import Heaader from '../../atom/deposit/Heaader';
import Title from '../../atom/deposit/Title';

const Deposit = () => {

  const [showDebitCard, setshowDebitCard] = useState(true);
  const [showBitPay, setshowBitPay] = useState(false);
  const [showWalet, setshowWalet] = useState(false);

 

  const handleDebitCard = () =>{
    setshowWalet(false);
    setshowBitPay(false);
    setshowDebitCard(prev => !prev);
  };
  
  const handleBitpay = () =>{
    setshowDebitCard(false);
    setshowWalet(false);
    setshowBitPay(true);
  };

  const handleWalet = () =>{
    setshowDebitCard(false);
    setshowBitPay(false);
    setshowWalet(true);
  };

  return (
    <div className="col-xl-12">
      <div className="card">
        <Title />
        <div className="card-body" id="deposits">
          <Heaader Walet = {handleWalet} BitPay = {handleBitpay} DebitCard = {handleDebitCard}/>
          <div className="tab-content"> 
            {showDebitCard && <DebitCard />}
            {showBitPay && <BitPay />}
            {showWalet && <WalletPay />}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Deposit;
