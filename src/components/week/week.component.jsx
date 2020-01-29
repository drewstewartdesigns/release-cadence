import React from 'react';
import { Day } from '../day/day.component';
import './week.styles.css';

export const Week = props => (
    <div className='week-list'>
        {props.weeks.map(week => (
            <div className='week-container' key={week.id}>
                <p>{ week.name }</p>
                <Day days={week.days} />
            </div>
        ))}
    </div>
)