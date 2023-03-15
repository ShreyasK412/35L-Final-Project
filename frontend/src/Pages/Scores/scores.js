
import './scores.css';
import Soccer from './Soccer/soccer'
import Basketball from './Basketball/basketball'
import React from 'react'
import ScoreNavbar from '../../Components/ScoreNav';
import Home from '../home';



function Scores () {
    let component
    switch (window.location.pathname) {
      case "basketball":
       component = <Basketball />
       break
       case "soccer":
       component = <Soccer />
       break
       case "football":
       component = <Home />
       break
 
    }
     return (<>
     <ScoreNavbar/>
     <div className='container'> {component}
     </div>
     
     </>); 
}
export default Scores

