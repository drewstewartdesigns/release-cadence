import React from 'react';
import './actions.styles.css';

const createActions = (actionObj) => {
    let actions = actionObj.branch.map(branchObj => (
        <div  className={branchObj.class} key={branchObj.id}>
            <p>{branchObj.name}</p>
        </div>
    ));
    if (actionObj.branch.length > 1) {
        actions = <div className="nested-action">{actions}</div>
    }
    return actions;
}
export const Action = props => (
    <div className='action-container'>
        {props.actions.map(actionObj => (
            <div className={'action-wrapper-' + actionObj.class} key={actionObj.id}>
            {createActions(actionObj)}
            </div>
        ))}
    </div>
)