import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';

import './tasks.css';

import Task from "../Task/Task";

export default class Tasks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: [0],
            num: 0
        };
    }

    addTask = () => {
        const newTasks = this.state.tasks;
        newTasks.splice(newTasks.length, 0, 1);
        this.setState({tasks: newTasks})
    };

    render() {
        return (
            <div className='tasks'>
                {
                    this.state.tasks.map((el, index) => {
                        return(
                            <div>
                                <Task key={index} addTask={this.addTask}/>
                            </div>

                        );
                    })}
            </div>
        );
    }

}