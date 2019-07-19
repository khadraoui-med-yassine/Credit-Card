import React from 'react';


export function Ligne31(props) 
  {
    return( 
        <div className="ligne3-1">
            <div className="code-card">{props.numbercard}</div>
            <div className="code-date">
                      <div className="code">5422</div>
                      <div className="partie-date">
                                <div className="valide-thru">VALID THRU</div>
                                <div className="month-year">
                                        <div className="month-yeartop" >month/year</div>
                                        <div className="date">{props.Validthru}</div>
                                </div> 
                      </div>
                </div>
            <div className="card-holder">
                  {props.cardholder}
              </div>
        </div>
          )
         
  } 