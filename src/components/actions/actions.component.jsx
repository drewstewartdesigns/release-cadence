import React from 'react';
import './actions.styles.css';

const createActions = (actionObj) => {
    let actions = actionObj.branch.map(branchObj => (
        <div key={branchObj.id} className={branchObj.class}>
            <p>{branchObj.name}</p>
        </div>
    ));
    if (actionObj.branch.length > 1) {
        actions = <div class="nested">{actions}</div>
    }
    return actions;
}
export const Action = props => (
    <div className='action-container'>
        {props.actions.map(actionObj => (
            <div className={'action-wrapper-' + actionObj.class}>
            {createActions(actionObj)}
            </div>
        ))}
    </div>
)