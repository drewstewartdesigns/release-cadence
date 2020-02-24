import React from 'react';
import moment from 'moment';

import './day.styles.css';

const firstCadenceStartDate = moment('2020-02-01');// replace with date of starting cadence
const today = moment();
// const weekDiff = Math.floor(firstCadenceStartDate.week() - today.week());// number of weeks between
const weekDiff = today.diff(firstCadenceStartDate, 'weeks');

let currentCadenceStartDate = today.clone().day(2);
if (weekDiff % 2 > 0 && today.day() <= 2) {
    // if evaluation is 1, current day is in week 2
    // step back 2 weeks
    currentCadenceStartDate.day(2 - 14);
    
}
let previousDate = null;// used to store the last found date
let iteration = 0;// manual index cuz provided resets each week i.e. only goes to 5

const createDate = (day) => {
    let displayDate = currentCadenceStartDate.clone();
    let activeDayClass = '';

    if (previousDate !== null) displayDate = previousDate.clone();

    displayDate.add(1, 'd');

    if (displayDate.format('ddd').toLowerCase() === 'sat') displayDate.add(2, 'd');// advance to the next Monday

    if (today.isSame(displayDate)) activeDayClass = 'active';

    let template =  (
        <div className='day-container' key={day.id}>
            {activeDayClass.length > 0 &&
                <div className='active-column' data-col-position={iteration + 1}></div>
            }
            <div className={'day-details ' + (day.details ? day.class : '') + ' ' + activeDayClass}>
                { day.details &&
                    <p>{ day.details }</p>
                }
            </div>
            <div className={'day-number ' + activeDayClass}>
                { displayDate.format('MMM Do') }
            </div>
            <div className={'day-name ' + activeDayClass}>
                { displayDate.format('dddd') }
            </div>
        </div>

    );

    previousDate = displayDate.clone();
    iteration++;
    return template;
}

export const Day = props => (
    <div className='day-list'>
        {props.days.map((day, idx) => (
            createDate(day, idx)
        ))}
    </div>
)


