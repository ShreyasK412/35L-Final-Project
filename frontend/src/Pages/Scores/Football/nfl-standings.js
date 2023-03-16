
import './nfl-standings.css';
const FOOTBALL_KEY = "25e3dcc42b7508519df698b88599a569";

export default function FootballStandings() {
    const url_american = "https://v1.american-football.api-sports.io/standings?league=1&season=2022&conference=American Football Conference";
    fetch(url_american, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.american-football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        const standingsData = data.response;
        // console.log(standingsData);
        const sortedData = standingsData.sort((a,b) => ((a.won / (a.won + a.lost)) - (b.won / (a.won + a.lost)))).reverse();
        for (let i = 0; i < sortedData.length; i++) {
            if (sortedData[i].team.id === 13) {
                sortedData[i].team.logo = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/New_York_Jets_logo.svg/1200px-New_York_Jets_logo.svg.png";
            }
        }
        // console.log(sortedData);

        const tbody = document.querySelector('#standings-table-nfl-american tbody');
        // console.log(tbody);
        tbody.innerHTML = ``;
        
        sortedData.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = ``;
            tr.innerHTML = `
            <td>
                <span class="rank">${index + 1}</span>
                <img src=${team.team.logo} class="logos">
                <span class="team-name">${team.team.name.split(' ').pop()}</span>
            </td>
            <td>${team.won}</td>
            <td>${team.lost}</td>
            <td>${(team.won / (team.won + team.lost)).toFixed(3)}</td>
            <td>${team.points.for}</td>
            <td>${team.points.against}</td>
            <td>${team.points.difference}</td>
            <td>${team.records.home}${team.records.home.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.road}${team.records.road.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.division}${team.records.division.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.conference}${team.records.conference.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.streak}</td>
            `;
            tbody.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err);
    });

    const url_national = "https://v1.american-football.api-sports.io/standings?league=1&season=2022&conference=National Football Conference";
    fetch(url_national, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1.american-football.api-sports.io",
            "x-rapidapi-key": FOOTBALL_KEY,
        }
    })
    .then(response => response.json())
    .then(data => {
        const standingsData = data.response;
        // console.log(standingsData);
        const sortedData = standingsData.sort((a,b) => ((a.won / (a.won + a.lost)) - (b.won / (a.won + a.lost)))).reverse();
        // console.log(sortedData);

        const tbody = document.querySelector('#standings-table-nfl-national tbody');
        // console.log(tbody);
        tbody.innerHTML = ``;
        
        sortedData.forEach((team, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = ``;
            tr.innerHTML = `
            <td>
                <span class="rank">${index + 1}</span>
                <img src=${team.team.logo} class="logos">
                <span class="team-name">${team.team.name.split(' ').pop()}</span>
            </td>
            <td>${team.won}</td>
            <td>${team.lost}</td>
            <td>${(team.won / (team.won + team.lost)).toFixed(3)}</td>
            <td>${team.points.for}</td>
            <td>${team.points.against}</td>
            <td>${team.points.difference}</td>
            <td>${team.records.home}${team.records.home.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.road}${team.records.road.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.division}${team.records.division.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.records.conference}${team.records.conference.split('-').length === 2 ? '-0' : ''}</td>
            <td>${team.streak}</td>
            `;
            tbody.appendChild(tr);
        })
    })
    .catch(err => {
        console.log(err);
    });

    return (
        <div className="nfl-standings-container">
        <div className="american-container">
            <h1 className="americanstandings">American Football Conference Standings <img className="americanicon" src="https://loodibee.com/wp-content/uploads/nfl-afc-American_Football_Conference_logo.png" alt=""></img></h1>
            <table id="standings-table-nfl-american">
                <thead>
                <tr>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>Pct</th>
                    <th>PF</th>
                    <th>PA</th>
                    <th>Net</th>
                    <th>Home</th>
                    <th>Road</th>
                    <th>Division</th>
                    <th>Conf</th>
                    <th>Strk</th>
                </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
        <div className="national-container">
            <h1 className="nationalstandings">National Football Conference Standings <img className="nationalicon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/National_Football_Conference_logo.svg/1200px-National_Football_Conference_logo.svg.png" alt=""></img></h1>
            <table id="standings-table-nfl-national">
                <thead>
                <tr>
                    <th>Team</th>
                    <th>W</th>
                    <th>L</th>
                    <th>Pct</th>
                    <th>PF</th>
                    <th>PA</th>
                    <th>Net</th>
                    <th>Home</th>
                    <th>Road</th>
                    <th>Division</th>
                    <th>Conf</th>
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