
import './scores.css';
import React from 'react';
import Soccer from './Soccer/soccer'
import Basketball from './Basketball/basketball'

export default function Scores() {
    return (
        <div>
        <div className="basketball-section">
            <Basketball/>
        </div>
        <br/>
        <div className="soccer-section">
            <Soccer/>
        </div>
        </div>
    )
}

