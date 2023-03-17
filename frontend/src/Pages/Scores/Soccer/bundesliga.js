import './bundesliga.css';
import React, {useState, useEffect} from 'react';

const SOCCER_KEY = "25e3dcc42b7508519df698b88599a569";

export default function Bundesliga() {

    const [fixtureTable, setFixtureTable] = useState('');

    const getFixtureTable = async () => {
        let currentDate = new Date();

        while (true) {
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const dateString = `2023-03-12`;
            //${year}-${month}-${day}

            let url = `https://v3.football.api-sports.io/fixtures?league=78&season=2022&date=${dateString}`;

            const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": SOCCER_KEY,
            }
            });
            var data = await response.json();
            console.log(data)
            let curr_length = data.response.length;

            if (curr_length === 0 || data.response[curr_length - 1].goals.home === null || data.response[curr_length-1].goals.away === null)
            {
                currentDate.setDate(currentDate.getDate() - 1)
            }
            else
            {
                break;
            }
        }

        const fixturesData = data.response;
        let tableHtml = `
        <h1 class="recentresults-bundesliga">Recent Matchday Results <img class="bundesligaicon2" src="https://media.api-sports.io/football/leagues/78.png" alt=""></img></h1>
        <table id="fixtures-table-bundesliga">
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

    const url = "https://v3.football.api-sports.io/standings?league=78&season=2022";
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": SOCCER_KEY,
        }
    })

    .then(response => response.json())
    .then(data => {
        // console.log(data);
        const standingsData = data.response[0].league.standings[0];
        const sortedData = standingsData.sort((a, b) => a.rank - b.rank);

        const tbody = document.querySelector('#standings-table-bundesliga tbody');
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
        <div className="soccer-container-bundesliga">
            <div className="standings-container-bundesliga">
            <h1 className="bundesliga">Bundesliga Standings <img className="bundesligaicon" src="https://media.api-sports.io/football/leagues/78.png" alt=""></img></h1>
            <table id="standings-table-bundesliga">
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
            <div className="fixtures-container-bundesliga" dangerouslySetInnerHTML={{ __html: fixtureTable }}>
            </div>
        </div>
      )
}