import React from 'react';
import './day.styles.css';

export const Day = props => (
    <div className='day-list'>
        {props.days.map(day => (
            <div className='day-container' key={day.id}>
                <div className={'day-details ' + (day.details ? 'bordered' : '')}>
                    { day.details &&
                        <p>{ day.details }</p>
                    }
                </div>
                <div className='day-number'>
                    <p>{ day.number }</p>
                </div>
                <div className='day-name'>
                    <p>{ day.name }</p>
                </div>
            </div>
        ))}
    </div>
)