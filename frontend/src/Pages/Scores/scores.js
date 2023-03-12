
import './scores.css';
import React from 'react';
import Stats from './stats';
import Soccer from './soccer'
import Basketball from './nba'

export default function Scores() {
    return (
        <div>
        <div className="basketball-section">
            <Basketball/>
        </div>
        <div className="stats-section">
            <Stats/>
        </div>
        <div className="soccer-section">
            <Soccer/>
        </div>
        </div>
    )
}

