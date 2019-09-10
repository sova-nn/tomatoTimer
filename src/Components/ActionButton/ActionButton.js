import React from 'react';
import './tomato.css';

export default function ActionButton(props) {

    return(
        <div>
            {props.timerIsVisible && <div className='tomato' onClick={props.onClick} />}
        </div>
    );

}