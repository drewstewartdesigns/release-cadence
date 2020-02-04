import React from 'react';
import moment from 'moment';

import './day.styles.css';

const currentDate = moment();
const startingDate = currentDate.clone().subtract(currentDate.day(), 'd');// force Sunday of the current week
let previousDate = null;

const createDate = (day, idx) => {
    let displayDate = startingDate.clone();
    let activeDayClass = '';

    if (previousDate !== null) displayDate = previousDate.clone();

    displayDate.add(1, 'd');

    if (displayDate.format('ddd').toLowerCase() === 'sat') displayDate.add(2, 'd');// advance to the next Monday

    if (currentDate.isSame(displayDate)) activeDayClass = 'active';

    let template =  (
        <div className='day-container' key={day.id}>
            {activeDayClass.length > 0 &&
                <div className='active-column' data-col-position={idx + 1}></div>
            }
            <div className={'day-details ' + (day.details ? 'bordered' : '') + activeDayClass}>
                { day.details &&
                    <p>{ day.details }</p>
                }
            </div>
            <div className={'day-number ' + activeDayClass}>
                { displayDate.format('MMM D') }
            </div>
            <div className={'day-name ' + activeDayClass}>
                { displayDate.format('ddd') }
            </div>
        </div>

    );

    previousDate = displayDate.clone();

    return template;
}

export const Day = props => (
    <div className='day-list'>
        {props.days.map((day, idx) => (
            createDate(day, idx)
        ))}
    </div>
)


