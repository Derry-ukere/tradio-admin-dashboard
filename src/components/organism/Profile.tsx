import React, {useState}from 'react';
import Overview from '../atom/profile/Overview';
import OverviewComponent from '../molecule/profile/OverviewComponent';
import Deposit from '../molecule/deposit/Deposit';
import Withdraw from '../molecule/withdraw/Withdraw';
import Affiliate from '../molecule/affiliate/Affiliate';

const Profile = () => {
  const [showOverview, setShowOverview] =   useState(true);
  const [showDeposit, setShowDeposit] =     useState(false);
  const [showWithdrwa, setshowWithdrwa] =   useState(false);
  const [showAffiliate, setshowAffiliate] = useState(false);



  const handleOverview = () => {
    setShowDeposit(false);
    setshowWithdrwa(false);
    setshowAffiliate(false);
    setShowOverview(prev => !prev);
  };
  const handleDeposit = () => {
    setshowWithdrwa(false);
    setshowAffiliate(false);
    setShowOverview(false);
    setShowDeposit(prev => !prev);
  };
  const handleWithdraw = () => {
    setShowDeposit(false);
    setshowAffiliate(false);
    setShowOverview(false);
    setshowWithdrwa(prev => !prev);

  };

  const handleAffiliate = () => {
    setShowDeposit(false);
    setshowWithdrwa(false);
    setShowOverview(false);
    setshowAffiliate(prev => !prev);

  };

  return (
    <div className="row">
      <Overview  overviewFunc = {handleOverview}  viewDepositFunc = {handleDeposit}  viewWithDrawFunc = {handleWithdraw} viewAffiliate = {handleAffiliate} />
      {showOverview &&  <OverviewComponent />}
      {showDeposit &&   <Deposit />}
      {showWithdrwa &&  <Withdraw />}
      {showAffiliate && <Affiliate />}
    </div>
  );
};

export default Profile;
