
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
     <div className='league_icons'> {component}
    
     <h1> 
      <a href = '/basketball'>
         <img className="nba-title-icon" src="https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png" alt=""/>
      </a>
      </h1>
      <div style={{ display: "flex" }}>
         <h1>
         <a href = '/soccer'>
            <img className="premleague-title-icon" src="https://media.api-sports.io/football/leagues/39.png" alt=""/>
         </a>
         </h1>
         <h1>
         <a href = '/soccer'>
            <img className="laliga-title-icon" src="https://media.api-sports.io/football/leagues/140.png" alt=""/>
            </a>
         </h1>
         <h1>
         <a href = '/soccer'>
            <img className="bundesliga-title-icon" src="https://media.api-sports.io/football/leagues/78.png" alt=""/>
            </a>
         </h1>
      </div>
      <h1> 
      <a href = '/football'>
         <img className="nfl-title-icon" src="https://cdn.cookielaw.org/logos/46acd508-0e8d-40cd-af22-1a8bdfa6da60/e9c29623-f807-422e-9944-964ce7fff1e0/a67792a1-43d4-44d0-8d5e-99ce69b835d9/National_Football_League_logo.svg.png" alt=""></img>
      </a>
      </h1>
   </div>
     
     </>); 
}
export default Scores

