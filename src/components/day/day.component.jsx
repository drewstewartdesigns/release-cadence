import React from 'react';
//import Moment from 'react-moment';
import moment from 'moment';

import './day.styles.css';

/*
    - get current date
    - get that week's Sunday
    - build sprint
*/

let count = 0;
//let currentDay = new Date();
let currentDate = moment();

const isWeekend = date => {
    if (currentDate.day() === 0) {
        // if sunday
        count++;// advance to Monday
    } else if (currentDate.day() === 6) {
        // if saturday
        count = count + 2;// advance to Monday
    }
}

const createDate = () => {

    //let currentIso = moment(currentDay).isoWeekday();// [mon-sun] 1, 2, 3, 4, 5, 6, 7
    //let newIso;


    //let monthDay = <Moment add={{days: newIso}} format='MMM. D' element='p' date={currentDay} />;
    //let weekDay = <Moment add={{days: newIso}} format='ddd' element='p' date={currentDay} />;

    isWeekend(currentDate);

    let nextDay = currentDate.day(count);
    let template =  (
        <>
        <div className='day-number'>
            { moment(nextDay).format('MMM D')}
        </div>
        <div className='day-name'>
            { count }
        </div>
        </>
    );

    count++;

    return template;
}

export const Day = props => (
    <div className='day-list'>
        {props.days.map((day, idx) => (


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


