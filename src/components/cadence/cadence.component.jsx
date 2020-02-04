import React from 'react';
import { Branch } from '../branch/branch.component';
import { Action } from '../actions/actions.component';

import './cadence.styles.css';

export const Cadence = props => (
    <>
        {props.cadence.map(server => (
            <div className={server.class} key={server.id}>
                <div className='cert-branch'>
                    <p>{server.name}</p>
                </div>

                <Branch branches={server.branches} />
                <Action actions={server.actions} />
            </div>
        ))}
    </>
)