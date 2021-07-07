import React from 'react';

type userTypes =  string;

interface proptypes {
  disclaimer : userTypes
}

const  Hello : React.FC<proptypes > = ({disclaimer}) : JSX.Element => {
  
  return (<h1>{disclaimer}</h1>);

};

export default Hello;
