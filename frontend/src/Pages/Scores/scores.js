
import './scores.css';
import Soccer from './Soccer/soccer'
import Basketball from './Basketball/basketball'
import Football from './Football/football'
import React from 'react'
import ScoreNavbar from '../../Components/ScoreNav';



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
       component = <Football />
       break
 
    }
     return (<>
     <ScoreNavbar/>
     <div className='container'> {component}
    
     <h1> 
         <img className="nba-title-icon" src="https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png" alt=""/>
      </h1>
      <div style={{ display: "flex" }}>
         <h1>
            <img className="premleague-title-icon" src="https://media.api-sports.io/football/leagues/39.png" alt=""/>
         </h1>
         <h1>
            <img className="bundesliga-title-icon" src="https://media.api-sports.io/football/leagues/78.png" alt=""/>
         </h1>
         <h1>
            <img className="laliga-title-icon" src="https://media.api-sports.io/football/leagues/140.png" alt=""/>
         </h1>
      </div>
   </div>
     
     </>); 
}
export default Scores

