import React from 'react';
import './week.styles.css';

export const Week = props => (
    <div className='week-list'>
        {props.weeks.map(week => (
            <div className='week-name' key={week.id}>
                <p>{ week.name }</p>
            </div>
        ))}
    </div>
)