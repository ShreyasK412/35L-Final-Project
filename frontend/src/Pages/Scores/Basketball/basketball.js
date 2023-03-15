
import "./basketball.css"
import BasketballGames from "./nba-games"
import BasketballStandings from "./nba-standings"
import Stats from './stats'

export default function Basketball() {
    return (
        <div>
        <h1><img className="nba-title-icon" src="https://1000logos.net/wp-content/uploads/2017/04/Logo-NBA.png" alt=""></img></h1>
            <div> <BasketballStandings/> </div>
            {/* <div> <BasketballGames/>  </div> */}
            <div> <Stats/> </div>
        </div>
        
    )
}