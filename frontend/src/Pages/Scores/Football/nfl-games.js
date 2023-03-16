import './nfl-games.css';
import React, {useState, useEffect} from 'react';

const FOOTBALL_KEY = "25e3dcc42b7508519df698b88599a569";

export default function FootballGames() {

    const [fixtureTable, setFixtureTable] = useState('');

    const getFixtureTable = async () => {

        let url = `https://v1.american-football.api-sports.io/games?league=1&season=2022&date=2023-02-12`;

        const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.american-football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
        });
        var data = await response.json();
        // console.log(data)
        
        const fixturesData = data.response;
        let tableHtml = `
        <h1 class="recentresults-nfl"><img class="superbowlicon" src="https://content.sportslogos.net/logos/7/593/full/_super_bowl_logo_primary_2022_sportslogosnet-2241.png" alt=""></img></h1>
        <table id="fixtures-table-nfl">
            <thead>
            <tr>
                <th>Home Team</th>
                <th>Score</th>
                <th>Away Team</th>
            </tr>
            </thead>
            <tbody>
        `;

        fixturesData.forEach((fixture, index) => {
        const homeTeam = fixture.teams.home;
        const awayTeam = fixture.teams.away;
        const score = fixture.scores;

        tableHtml += `
            <tr>
            <td>
                <img src=${homeTeam.logo} class="logos">
                <div></div>
                <span class="team-name">${homeTeam.name}</span>
            </td>
            <td>
                <span style="color: ${score.home.total > score.away.total ? 'green' : (score.home.total < score.away.total ? 'red' : 'blue')}">
                ${score.home.total > score.away.total ? 'W' : (score.home.total < score.away.total ? 'L' : 'D')}
                </span>
                &nbsp
                &nbsp
                <span style="color: ${score.home.total < score.away.total ? 'green' : (score.home.total > score.away.total ? 'red' : 'blue')}">
                    ${score.home.total < score.away.total ? 'W' : (score.home.total > score.away.total ? 'L' : 'D')}
                </span>
                <br/>
                <span class="score">
                ${score.home.total} - ${score.away.total}
                
                </span>
                
            </td>
            <td>
                <img src=${awayTeam.logo} class="logos">
                <div></div>
                <span class="team-name">${awayTeam.name}</span>
            </td>
            </tr>
        `;
        })

        tableHtml += `
            </tbody>
        </table>
        `;

        return tableHtml;
    }

    useEffect(() => {
        getFixtureTable()
        .then(tableHtml => setFixtureTable(tableHtml))
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="fixtures-container-nfl" dangerouslySetInnerHTML={{ __html: fixtureTable }}>
            </div>
    )
}