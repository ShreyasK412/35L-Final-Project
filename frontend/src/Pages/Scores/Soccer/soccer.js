
import PremLeague from './premleague'
import LaLiga from './laliga'
import Bundesliga from './bundesliga'

export default function Soccer() {
    return (
        <div>
        <h1><img className="premleague-title-icon" src="https://media.api-sports.io/football/leagues/39.png" alt=""></img></h1>
        <PremLeague/>
        <br/>
        <h1><img className="laliga-title-icon" src="https://media.api-sports.io/football/leagues/140.png" alt=""></img></h1>
        <LaLiga/>
        <br/>
        <h1><img className="bundesliga-title-icon" src="https://media.api-sports.io/football/leagues/78.png" alt=""></img></h1>
        <Bundesliga/>
        </div>
    )
}