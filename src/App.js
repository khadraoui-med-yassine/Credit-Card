import React from 'react';
import './App.css';
import {Ligne1} from './Component/Ligne1';
import {Lignepuce} from './Component/Lignepuce.js';
import Visa from './img/visa.JPG';
import {Ligne31} from './Component/Ligne31';



function Ligne3()
  {
    return(
        <div className="ligne3">
            <Ligne31 />
            <Ligne32 />
        </div>
          )
  }
function Ligne32()
  {
    return(
        <img  src={Visa} className="imgvisa" alt="moshkla mte3 image"></img> 
    )
  }   



class App extends React.Component {
  constructor(props)
    {
      super(props)
      this.state={
                cardholder:'',
                numbercard:'**** **** **** ****',
                Validthru:''  
              }
    }
      verif_cardholder=(event)=>
            {    let valeur=event.target.value;
                 var re = /[0-9]/;
 
                 if( re.test(valeur))
                    { alert("Il faut que les nombres n'existes pas ");
                      valeur = valeur.slice(0,valeur.length-1);
                      event.target.value=event.target.value.slice(0,event.target.value.length-1);
                    }
                 this.setState({cardholder:valeur.toUpperCase()});
            }
      verif_numbercard=(event)=>
        { let valeur=event.target.value;
          let ch="";
          var re = /[a-z,A-Z]/;
          if(re.test(valeur))
            {
              alert("Il faut que les Alphabes n'existes pas ");
              valeur = valeur.slice(0,valeur.length-1);
              event.target.value=event.target.value.slice(0,event.target.value.length-1);
            }      
         
          // let tab= event.target.value.split(""); 
          let tab=[];  
          
           for (let i=0;i<event.target.value.length;i++)
            {
              if(i==4 || i==8 || i==12  )
                {tab.push(" ");
                 tab.push(event.target.value[i]);
                } 
              else
                tab.push(event.target.value[i]);  
            }
            let tab2=['*','*','*','*',' ','*','*','*','*',' ','*','*','*','*',' ','*','*','*','*'];
            for(let i=0;i<tab.length;i++)
              { 
                tab2[i]=tab[i];
              }
             let chaine =tab2.join(""); 
              this.setState({numbercard:chaine});
          }      

        verif_Validthru=(event)=>
        { 
            let regex=/[^1-12]/;
            // let regextwo=/[^19-25]/;
            let regexall=/[A-Z]gi/;
          // if(regexall.test(event.target.value)) 
          // { 
            if(event.target.value.length===5)
              {
                let month=event.target.value[0]+event.target.value[1];
                let year=event.target.value[3]+event.target.value[4];
 
                if( regex.test(Number(month))  ||  ( (Number(year)<19) || (Number(year)>24)) )
                  {
                //     if ( (Number(year)<19) && (Number(year)>24))
                        alert("la date est invalide ");
                        event.target.value="";

                  } 
            
              }
            this.setState({Validthru:event.target.value});
          // }  

        }
  render(){
          return (
            <div style={{display:"flex",flexWrap:'wrap'}}>
                <div className="card">
                    <Ligne1 />
                    <Lignepuce />
                    <div className="ligne3">
                        <Ligne31  cardholder={this.state.cardholder} numbercard={this.state.numbercard} Validthru={this.state.Validthru}  />
                        <Ligne32 />
                    </div>
                </div>
                <div className="form">
                                <input type="text" className="input" placeholder="Number for Card" onChange={this.verif_numbercard} maxLength='16'  />
                                <input type="text" className="input" placeholder="Card Holder" maxLength='20'  onChange={this.verif_cardholder} />
                                <input type="text" className="input" placeholder="Valid thru" maxLength='5' onChange={this.verif_Validthru} />
                </div>  
        
            </div>
          );}
}

export default App;
