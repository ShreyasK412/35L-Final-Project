import axios from 'axios';
import debounce from 'lodash/debounce';
import React, {Component} from 'react';
import './stats.css';

class Stats extends Component {
  constructor(props){
    super(props)
    this.state={
      playerName: null,
      playerStats: null,
      errorMessage: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId();
  }

  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0){
      this.setState({playerName: replace})
    } else {
      // alert("Please type players name!")
    }
  }

  getPlayerId = () => {
    axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
    .then(async res => {
      // console.log(res.data.data)
      if(res.data.data[0] === undefined){
        this.setState({ errorMessage: "Player does not exist", playerStats: null })
      } else if(res.data.data.length > 1){
        // alert("Pleases specify the name more!")
      } else{
        await this.getPlayerStats(res.data.data[0].id)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  getPlayerStats = (playerId) => {
    axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
    .then(async res => {
      console.log(res.data.data)
      if(res.data.data[0]){
        this.setState({ playerStats: res.data.data[0], errorMessage: null })
      } else{
        this.setState({ errorMessage: "Player has not played this season", playerStats: null })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render(){
    return (
      <div className="PlayerStats">
        <form onSubmit={this.handleSubmit}>
          <h2> NBA Player Stats </h2>
          <div className = "Stats_Subtitle">
            <h4> Live Updated 2022-2023 Stats</h4>
          </div>
          <div className = "Name_Text">
            <label>
              Name
              <input 
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Please Enter Player Name"
              /> 
            </label> 
          </div>
          <input type="submit" value="Submit"/>
        </form>
        {this.state.errorMessage && <div>{this.state.errorMessage}</div>}
        {!this.state.errorMessage && this.state.playerStats && (
          <div className="StatsText"> 
            Games Played: {this.state.playerStats["games_played"]}
            <br />
            Points Per Game: {this.state.playerStats["pts"]}
            <br />
            Rebounds Per Game: {this.state.playerStats["reb"]}
            <br />
            Assists Per Game: {this.state.playerStats["ast"]}
            <br />
            Field Goal: {((Math.round(1000 * this.state.playerStats["fg_pct"]))/10) + '%'}
            <br />
            3P: {((Math.round(1000 * this.state.playerStats["fg3_pct"]))/10) + '%'}
          </div>
        )}
      </div>
    );
  }
}

export default Stats;
