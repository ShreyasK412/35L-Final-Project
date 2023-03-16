import './football.css'
import FootballGames from './nfl-games';
import FootballStandings from "./nfl-standings";

export default function Football() {
    return (
        <div>
        <h1><img className="nfl-title-icon" src="https://cdn.cookielaw.org/logos/46acd508-0e8d-40cd-af22-1a8bdfa6da60/e9c29623-f807-422e-9944-964ce7fff1e0/a67792a1-43d4-44d0-8d5e-99ce69b835d9/National_Football_League_logo.svg.png" alt=""></img></h1>
            <div> <FootballStandings/> </div>
            <div> <FootballGames/> </div>
        </div>
    )
}