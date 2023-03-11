
import './scores.css';
import axios from 'axios';
import debounce from 'lodash/debounce';
import React, {Component} from 'react';
import Stats from './stats';




export default function Scores() {
    const FOOTBALL_KEY = "25e3dcc42b7508519df698b88599a569";
    const url = "https://v3.football.api-sports.io/standings?league=39&season=2022";
    fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v3.football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
    })

    .then(response => response.json())
    .then(data => {

        const standingsData = data.response[0].league.standings[0];
        const sortedData = standingsData.sort((a, b) => a.rank - b.rank);

        const tbody = document.querySelector('#standings-table tbody');
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
   
        <div> <div align="center"> 
        <h1 class="premleague">Premier League Standings <img class="premleagueicon" src="https://media.api-sports.io/football/leagues/39.png" alt=""></img></h1>
        <table id="standings-table">
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
        <Stats/>
        </div>
        </div>
    )
}
