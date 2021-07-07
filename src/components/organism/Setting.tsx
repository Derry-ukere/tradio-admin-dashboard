import React,{useState} from 'react';
import Header from '../molecule/settings/Header';
import ProfileSettings from '../molecule/settings/ProfileSettings';
import Bank from '../molecule/settings/Bank';
import Security from '../molecule/settings/Security';

const Setting = () => {
  const [showProfile, setShowProfile] = useState(true);
  const [showBank, setShowBank] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
    setShowBank(false);
    setShowSecurity(false);
  };

  const handleShowBank = () => {
    setShowBank(true);
    setShowProfile(false);
    setShowSecurity(false);
  };

  const handleShowSecurity = () => {
    setShowSecurity(true);
    setShowProfile(false);
    setShowBank(false);
  };


  return (
    <div className="row">
      <Header showProfile = {handleShowProfile} showBank = {handleShowBank}  showSecurity = {handleShowSecurity} />
      {showProfile && <ProfileSettings />}
      {showBank && <Bank />}
      {showSecurity && <Security />}
    </div>   
  );
};

export default Setting;
