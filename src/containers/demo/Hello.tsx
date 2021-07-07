import React,{useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Demo from '../../components/demo/Index';
import DemoActions from '../../actions/demo';
import {RootState} from '../../store';



const Hello = () => {
  const dispatch = useDispatch();
  const {payload} = useSelector((state : RootState )=> state.demo);
  useEffect(()=>{
    dispatch(DemoActions.main());
  },[dispatch]); 
  const name = 'loading...';
  return (
    <div>
      <Demo disclaimer = {payload?.disclaimer ? payload.disclaimer : name } />
      <h1>{}</h1>
    </div>
  );
};

export default Hello;

