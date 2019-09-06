import React from 'react';
import './tomato.css';

export default function ActionButton(props) {

    return(
            <div className='tomato' onClick = {()=> props.handleClick}/>
    );

}