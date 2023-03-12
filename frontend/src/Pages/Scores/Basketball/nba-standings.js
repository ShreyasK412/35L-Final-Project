import './nba-standings.css';
import React from 'react';

const BASKETBALL_KEY = "25e3dcc42b7508519df698b88599a569";

export default function BasketballStandings() {
    const url_east = "https://v2.nba.api-sports.io/standings?league=Standard&season=2022&conference=East";
    fetch(url_east, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v2.nba.api-sports.io",
            "x-rapidapi-key": BASKETBALL_KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        const standingsData = data.response;
        const sortedData = standingsData.sort((a,b) => a.conference.rank - b.conference.rank)
        console.log(sortedData);

        const tbody = document.querySelector('#standings-table-nba-e tbody');
        // console.log(tbody);
        tbody.innerHTML = ``;
        
        sortedData.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = ``;
            tr.innerHTML = `
            <td>
                <span class="rank">${team.conference.rank}</span>
                <img src=${team.team.logo} class="logos">
                <span class="team-name">${team.team.nickname}</span>
            </td>
            <td>${team.win.total}</td>
            <td>${team.loss.total}</td>
            <td>${team.win.percentage}</td>
            <td>${team.gamesBehind != null ? team.gamesBehind: '-'}</td>
            <td>${team.win.home}-${team.loss.home}</td>
            <td>${team.win.away}-${team.loss.away}</td>
            <td>${team.win.lastTen}-${team.loss.lastTen}</td>
            <td>${team.winStreak ? 'W' : 'L'}${team.streak}</td>
            `;
            // console.log(tr.innerHTML);
            tbody.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err);
    });

    const url_west = "https://v2.nba.api-sports.io/standings?league=Standard&season=2022&conference=West";
    fetch(url_west, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v2.nba.api-sports.io",
            "x-rapidapi-key": BASKETBALL_KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        const standingsData = data.response;
        const sortedData = standingsData.sort((a,b) => a.conference.rank - b.conference.rank)
        console.log(sortedData);

        const tbody = document.querySelector('#standings-table-nba-w tbody');
        // console.log(tbody);
        tbody.innerHTML = ``;
        
        sortedData.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = ``;
            tr.innerHTML = `
            <td>
                <span class="rank">${team.conference.rank}</span>
                <img src=${team.team.logo} class="logos">
                <span class="team-name">${team.team.nickname}</span>
            </td>
            <td>${team.win.total}</td>
            <td>${team.loss.total}</td>
            <td>${team.win.percentage}</td>
            <td>${team.gamesBehind != null ? team.gamesBehind: '-'}</td>
            <td>${team.win.home}-${team.loss.home}</td>
            <td>${team.win.away}-${team.loss.away}</td>
            <td>${team.win.lastTen}-${team.loss.lastTen}</td>
            <td>${team.winStreak ? 'W' : 'L'}${team.streak}</td>
            `;
            // console.log(tr.innerHTML);
            tbody.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err);
    });


    return (
        <div className="nba-standings-container">
        <div className="w-container">
            <h1 className="weststandings">West Conference Standings <img className="westicon" src="https://sportsfly.cbsistatic.com/fly-0425/bundles/sportsmediacss/images/conference-logos/nba/WEST.svg" alt=""></img></h1>
            <table id="standings-table-nba-w">
                <thead>
                <tr>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>Pct</th>
                    <th>GB</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>L10</th>
                    <th>Strk</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div className="e-container">
            <h1 className="eaststandings">East Conference Standings <img className="easticon" src="https://sportsfly.cbsistatic.com/fly-0425/bundles/sportsmediacss/images/conference-logos/nba/EAST.svg" alt=""></img></h1>
            <table id="standings-table-nba-e">
                <thead>
                <tr>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>Pct</th>
                    <th>GB</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>L10</th>
                    <th>Strk</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        </div>
    )
    
}