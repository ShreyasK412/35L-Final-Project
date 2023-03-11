import axios from 'axios';
import debounce from 'lodash/debounce';
import React, {Component} from 'react';
import './stats.css';

class Stats extends Component {
    constructor(props){
      super(props)
      this.state={
        playerName: null,
        playerStats: {}
      }
    }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.getPlayerId()
    console.log(this.state.playerName)
  }
  
  handleChange = (event) => {
    const replace = event.target.value.split(" ").join("_");
    if(replace.length > 0){
      this.setState({playerName: replace})
    } else {
    //   alert("Please type players name!")
    }
  }
  
    getPlayerId = () => {
      axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
      .then(async res => {
        // console.log(res.data.data)
        if(res.data.data[0] === undefined){
           
        //   alert("This player is either injured or hasn't played yet!")
        } else if(res.data.data.length > 1){
        //   alert("Pleases specify the name more!")
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
        this.setState({ playerStats: res.data.data[0]})
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
         <label>
            Name
           <input 
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Please Enter Player Name"
           />
         </label>
         <input type="submit" value="Submit"/>
       </form>
       <div className="StatsText"> 
       games played: {this.state.playerStats["games_played"]}
       <br />
       points averaged: {this.state.playerStats["pts"]}
       <br />
       rebounds averaged: {this.state.playerStats["reb"]}
       <br />
       assists averaged: {this.state.playerStats["ast"]}
       <br />
       Field Goal %: {this.state.playerStats["fg_pct"]}
       </div>
      </div>
    );
  }
  }
export default Stats;  