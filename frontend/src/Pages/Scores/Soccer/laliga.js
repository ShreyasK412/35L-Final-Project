import './laliga.css';
import React, {useState, useEffect} from 'react';

const FOOTBALL_KEY = "25e3dcc42b7508519df698b88599a569";

export default function LaLiga() {

    const [fixtureTable, setFixtureTable] = useState('');
    const [lastGameDate, setLastGameDate] = useState(null);

    const getFixtureTable = async () => {
        let currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;

        let url = `https://v3.football.api-sports.io/fixtures?league=140&season=2022&date=${dateString}`;

        const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
        });
        let data = await response.json();
        // console.log(data)
        let curr_length = data.response.length;

        if (curr_length === 0 || data.response[curr_length - 1].goals.home === null || data.response[curr_length-1].goals.away === null)
        {
            url = `https://v3.football.api-sports.io/fixtures?league=140&season=2022&date=${lastGameDate}`;

            const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": FOOTBALL_KEY,
            }
            });
            data = await response.json();
        }
        else
        {
            setLastGameDate(dateString);
        }

        const fixturesData = data.response;
        let tableHtml = `
        <h1 class="recentresults-laliga">Recent Matchday Results <img class="laligaicon2" src="https://media.api-sports.io/football/leagues/140.png" alt=""></img></h1>
        <table id="fixtures-table-laliga">
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
        const score = fixture.score.fulltime;

        tableHtml += `
            <tr>
            <td>
                <img src=${homeTeam.logo} class="logos">
                <div></div>
                <span class="team-name">${homeTeam.name}</span>
            </td>
            <td>
                <span style="color: ${score.home > score.away ? 'green' : (score.home < score.away ? 'red' : 'blue')}">
                ${score.home > score.away ? 'W' : (score.home < score.away ? 'L' : 'D')}
                </span>
                &nbsp
                <span style="color: ${score.home < score.away ? 'green' : (score.home > score.away ? 'red' : 'blue')}">
                    ${score.home < score.away ? 'W' : (score.home > score.away ? 'L' : 'D')}
                </span>
                <br/>
                <span class="score">
                ${score.home} - ${score.away}
                
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

    const url = "https://v3.football.api-sports.io/standings?league=140&season=2022";
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
    })

    .then(response => response.json())
    .then(data => {
        console.log(data);
        const standingsData = data.response[0].league.standings[0];
        const sortedData = standingsData.sort((a, b) => a.rank - b.rank);

        const tbody = document.querySelector('#standings-table-laliga tbody');
        tbody.innerHTML = ``;
        
        sortedData.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = ``;
            tr.innerHTML = `
            <td>
                <span class="rank">${team.rank}</span>
                <img src=${team.team.logo} class="logos">
                <span class="team-name">${team.team.name}</span>
            </td>
            <td>${team.all.played}</td>
            <td>${team.all.win}</td>
            <td>${team.all.draw}</td>
            <td>${team.all.lose}</td>
            <td>${team.all.goals.for}</td>
            <td>${team.all.goals.against}</td>
            <td>${team.goalsDiff}</td>
            <td>${team.points}</td>
            `;
            tbody.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err);
    });

    return (
        <div className="soccer-container-laliga">
            <div className="standings-container-laliga">
            <h1 className="laliga">Premier League Standings <img className="laligaicon" src="https://media.api-sports.io/football/leagues/140.png" alt=""></img></h1>
            <table id="standings-table-laliga">
                <thead>
                <tr>
                    <th>Club</th>
                    <th>MP</th>
                    <th>W</th>
                    <th>D</th>
                    <th>L</th>
                    <th>GF</th>
                    <th>GA</th>
                    <th>GD</th>
                    <th>Pts</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            </div>
            <div className="fixtures-container-laliga" dangerouslySetInnerHTML={{ __html: fixtureTable }}>
            </div>
        </div>
      )
}