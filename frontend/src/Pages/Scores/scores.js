
import './scores.css';
import React from 'react';
import Stats from './stats';
import Soccer from './soccer'

export default function Scores() {
    return (
        <div>
        <div className="soccer-section">
            <Soccer/>
        </div>
        <div className="stats-section">
            <Stats/>
        </div>
        </div>
    )
}

