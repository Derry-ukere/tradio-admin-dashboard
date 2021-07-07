import React,{useState} from 'react';
import Header from '../molecule/data/Header';
import IndexHistory from '../molecule/data/IndexHistory';
import Rate from '../molecule/data/Rate';
import Insurance from '../molecule/data/Insurance';

const Data = () => {
  const [showIndex, setShowIndex] = useState(true);
  const [showRate, setShowRate] = useState(false);
  const [showInsurance, setShowInsurance] = useState(false);

  const handleshow = () =>{
    setShowIndex(prev => !prev);
    setShowRate(false);
    setShowInsurance(false);
  };

  const handleRate = () =>{
    setShowRate(true);
    setShowInsurance(false);
    setShowIndex(false);
  };

  const handleInsurance = () =>{
    setShowInsurance(true);
    setShowRate(false);
    setShowIndex(false);
  };

  return (
    <div className="row">
      <Header handleshow = {handleshow} handleRate = {handleRate} handleInsurance ={handleInsurance} />
      {showIndex && <IndexHistory />}
      {showRate && <Rate />}
      {showInsurance && <Insurance/>}
    </div>
  );
};

export default Data;
