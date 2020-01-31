import React from 'react';
import './actions.styles.css';

export const Action = props => (
    <div className='action-container'>
        {props.actions.map(actionObj => (
            <div className='action-wrapper'>
            {actionObj.branch.map(branchObj => (
                <div key={branchObj.id} className={branchObj.class}>
                    <p>{branchObj.name}</p>
                </div>
            ))}


            </div>
        ))}
    </div>
)