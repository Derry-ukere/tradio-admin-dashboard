/* eslint-disable quotes */
import React,{useState} from 'react';
import Limit from './Limit';
import Market from './Market';
import Stop from './Stop';

const ColOne = () => {
  const [showlimit, setShowlimit] = useState(true);
  const [showMarket, setShowMarket] = useState(false);
  const [showStoplimit, setStopShowlimit] = useState(false);

  const handleLimit = () => {
    setShowMarket(false);
    setStopShowlimit(false);
    setShowlimit(prev => !prev);
  };
  const handleMarket = () =>{
    setShowlimit(false);
    setStopShowlimit(false);
    setShowMarket(prev => !prev);
  };
  const handleStop = () => {
    setShowlimit(false);
    setShowMarket(false);
    setStopShowlimit(prev => !prev);
  };

  
  return (
    <div className="col-xl-3 col-lg-6 col-md-12 col-xxl-6">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-pills" role="tablist">
            <li className="nav-item" onClick = {handleLimit}>
              <a className={showlimit ? "nav-link active" : "nav-link"} data-toggle="pill"  role="tab" aria-selected="true">Limit</a>
            </li>
            <li className="nav-item" onClick = {handleMarket}>
              <a className={showMarket ? "nav-link active" : "nav-link"} data-toggle="pill"  role="tab" aria-selected="false">Market</a>
            </li>
            <li className="nav-item" onClick = {handleStop}>
              <a className={showStoplimit ? "nav-link active" : "nav-link"} data-toggle="pill"  role="tab" aria-selected="false">Stop Limit</a>
            </li>
          </ul>
        </div>
        <div className="card-body market-limit ps ps--active-y">
          <div className="tab-content">
            {showlimit  && <Limit/>}
            {showMarket&& <Market />}
            {showStoplimit && <Stop/>}
            <div className="ps__rail-x" style={{left: '0px', bottom: '0px'}}><div className="ps__thumb-x" tabIndex={0} style={{left: '0px', width: '0px'}} /></div><div className="ps__rail-y" style={{top: '0px', right: '0px', height: '400px'}}>
              <div className="ps__thumb-y" tabIndex={0} style={{top: '0px', height: '392px'}} />
            </div>
          </div>
        </div>

      </div>

    </div>

  );
};

export default ColOne;
