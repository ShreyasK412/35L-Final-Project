import React, { useState, useEffect } from 'react';

function Scores() {
    const [scoreboard, setScoreboard] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      const url = `https://data.nba.net/prod/v2/${year}${month}${day}/scoreboard.json`;
  
      fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to retrieve NBA scoreboard data');
          }
        })
        .then(data => setScoreboard(data))
        .catch(error => setError(error.message));
    }, []);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!scoreboard) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>NBA Scoreboard</h1>
        {scoreboard.games.map(game => (
          <div key={game.gameId}>
            <h2>{game.hTeam.triCode} vs. {game.vTeam.triCode}</h2>
            <p>{game.statusGame}</p>
            <p>{game.hTeam.score} - {game.vTeam.score}</p>
          </div>
        ))}
      </div>
    );
  }


export default Scores;



// export default function Scores() {
//     return <h1>ScoreBoards</h1>
// }