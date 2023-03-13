import './nba-games.css';
import React, {useState, useEffect} from 'react';

const BASKETBALL_KEY = "25e3dcc42b7508519df698b88599a569";


export default function BasketballGames() {
    const [fixtureTable, setFixtureTable] = useState('');
    const [lastGameDate, setLastGameDate] = useState(null);

    const getFixtureTable = async () => {
        let currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;

        let url = `https://v2.nba.api-sports.io/games?league=Standard&season=2022&date=${dateString}`;;

        const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v2.nba.api-sports.io",
            "x-rapidapi-key": BASKETBALL_KEY,
        }
        });
        let data = await response.json();
        // console.log(data)

        let curr_length = data.response.length;

        if (curr_length === 0 || data.response[0].status.long !== "Finished")
        {
            url = `https://v3.football.api-sports.io/fixtures?league=39&season=2022&date=${lastGameDate}`;

            const response = await fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v2.nba.api-sports.io",
                "x-rapidapi-key": BASKETBALL_KEY,
            }
            });
            data = await response.json();
        }
        else
        {
            setLastGameDate(dateString);
        }

        // console.log(dateString);

        const fixturesData = data.response;
        // console.log(fixturesData);
        let tableHtml = `
        <h1 class="recentresults-nba">Recent Game Results</h1>
        <table id="fixtures-table-nba">
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
        
            if (fixture.status.long === "Finished")
            {
                const homeTeam = fixture.teams.home;
                const awayTeam = fixture.teams.visitors;
                const score = fixture.scores;
                
                tableHtml += `
                    <tr>
                    <td>
                        <img src=${homeTeam.logo} class="logos">
                        <div></div>
                        <span class="team-name">${homeTeam.nickname}</span>
                    </td>
                    <td>
                        <span class="score">${score.home.points} - ${score.visitors.points}</span>
                    </td>
                    <td>
                        <img src=${awayTeam.logo} class="logos">
                        <div></div>
                        <span class="team-name">${awayTeam.nickname}</span>
                    </td>
                    </tr>
                `;
            }
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
        <div className="fixtures-container-nba" dangerouslySetInnerHTML={{ __html: fixtureTable }}>
            </div>
    )

}