import React, { useState, useEffect } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

function Betting() {
  const [odds, setOdds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOdds = debounce(async () => {
      try {
        const response = await axios.get('https://therundown-therundown-v1.p.rapidapi.com/sports/4/events', {
          params: {
            include: 'scores',
            include_units: true,
            offset: 0
          },
          headers: {
            'X-RapidAPI-Key': '9db7d3c505msh73a10b135365e03p164d58jsn3f971b150f0b',
            'X-RapidAPI-Host': 'therundown-therundown-v1.p.rapidapi.com',
          },
        });
        const filteredOdds = {};
        const now = new Date();
        const today = now.toISOString().slice(0, 10);

        for (const event of response.data.events) {
          const gameDate = new Date(event.event_date).toISOString().slice(0, 10);
          if (gameDate === today && event.sport_id === 4) {
            const homeTeam = event.teams_normalized[0].name;
            const awayTeam = event.teams_normalized[1].name;
            const homeScore = event.scores_normalized[0];
            const awayScore = event.scores_normalized[1];
            const sites = event.sites;
            for (const site of sites) {
              const siteName = site.site_nice;
              const odds = site.odds.spreads.points;
              const oddsString = `${homeTeam} ${odds.home} vs ${awayTeam} ${odds.away}`;
              if (!filteredOdds[siteName]) {
                filteredOdds[siteName] = [];
              }
              filteredOdds[siteName].push({ oddsString, homeScore, awayScore });
            }
          }
        }
        setOdds(filteredOdds);
        setLoading(false);
      }
      catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 1000);

    
    fetchOdds();
  }, []);

  const renderOdds = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    const oddsList = Object.keys(odds).map((siteName) => (
      <div key={siteName}>
        <h2>{siteName}</h2>
        {odds[siteName].map((game) => (
          <div key={game.oddsString}>
            <p>{game.oddsString}</p>
            <p>Score: {game.homeScore} - {game.awayScore}</p>
          </div>
        ))}
      </div>
    ));

    return oddsList;
  };

  return (
    <div>
      <h1>Betting Odds</h1>
      {renderOdds()}
    </div>
  );
}

export default Betting;
