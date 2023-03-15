
import './scores.css';
import Soccer from './Soccer/soccer'
import Basketball from './Basketball/basketball'
import React from 'react'
import ScoreNavbar from '../../Components/ScoreNav';
import Home from '../home';
import { FaAlignLeft } from 'react-icons/fa';



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
    
     <h1> <img className="nba-title-icon" src="https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png" alt=""></img>
     </h1>
     
     <div> 
     <h1><img className="premleague-title-icon" src="https://media.api-sports.io/football/leagues/39.png" alt=""></img></h1>
     </div>
    
     </div>
     
     </>); 
}
export default Scores

