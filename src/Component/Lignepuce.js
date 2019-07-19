import React from 'react';
import Puce from '../img/Puce.JPG';

export class Lignepuce extends React.Component
  {
    constructor(props)
      {
       super(props); 
      }
    render(){
      return (
                <div className="ligne-puce">
                  <img src={Puce} className="imgpuce" alt="moshkla mte3 image"></img>
                </div>
             )
            }
  }  
  