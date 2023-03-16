import './football.css'
import FootballStandings from "./nfl-standings";

export default function Football() {
    return (
        <div>
        <h1><img className="nfl-title-icon" alt=""></img></h1>
            <div> <FootballStandings/> </div>
        </div>
    )
}