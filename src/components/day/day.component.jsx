import React from 'react';
import moment from 'moment';

import './day.styles.css';
//debugger
const firstCadenceStartDate = moment('2020-02-12');// replace with date of starting cadence
const today = moment();
// const weekDiff = Math.floor(firstCadenceStartDate.week() - today.week());// number of weeks between
const weekDiff = today.diff(firstCadenceStartDate, 'days') / 7;

let currentCadenceStartDate = today.clone().day(2);
let difference = Math.round(weekDiff % 2);
if (difference === 1) {
  currentCadenceStartDate.day(2 - 7);
} else if (difference > 1 && today.day() <= 2) {
  // Monday or Tuesday of week 2
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
            <div className={'day-details ' + (day.title ? day.class : '') + ' ' + activeDayClass}>
                { day.title &&
                    <p>{ day.title }</p>
                }
                { day.description &&
                    <p class="day-description">{ day.description }</p>
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


