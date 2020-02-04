import React from 'react';
//import Moment from 'react-moment';
import moment from 'moment';

import './day.styles.css';

let currentDate = moment();
const startingDate = currentDate.clone().subtract(currentDate.day(), 'd');// force Sunday of the current week
let previousDate = null;

const createDate = () => {
    debugger

    let displayDate = startingDate.clone();
    let activeDayClass = '';

    if (previousDate !== null) displayDate = previousDate.clone();

    displayDate.add(1, 'd');

    if (displayDate.format('ddd').toLowerCase() === 'sat') displayDate.add(2, 'd');// advance to the next Monday

    if (currentDate.isSame(displayDate)) activeDayClass = 'active';

    let template =  (
        <>
        <div className={'day-number ' + activeDayClass}>
            { displayDate.format('MMM D') }
        </div>
        <div className={'day-name ' + activeDayClass}>
            { displayDate.format('ddd') }
        </div>
        </>
    );

    previousDate = displayDate.clone();

    return template;
}

export const Day = props => (
    <div className='day-list'>
        {props.days.map(day => (


            <div className='day-container' key={day.id}>
                <div className={'day-details ' + (day.details ? 'bordered' : '')}>
                    { day.details &&
                        <p>{ day.details }</p>
                    }
                </div>
                { createDate() }
            </div>
        ))}
    </div>
)


