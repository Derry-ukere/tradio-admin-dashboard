import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Demo from './containers/demo/Hello';

function App() {     
  return ( 
    <BrowserRouter>
      <Route path = '/test' component = {Demo}/>
    </BrowserRouter>
  );
}    
  
export default App; 
