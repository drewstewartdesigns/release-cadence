import React from 'react';

import './branch.styles.css';

export const Branch = props => (
    <div className='branch-container'>
        {props.branches.map(branchObj => (
            <div key={branchObj.id} className={'branch-' + branchObj.class}>
                <div className={branchObj.class}>
                    <p>{branchObj.name}</p>
                </div>
            </div>
        ))}
    </div>
)