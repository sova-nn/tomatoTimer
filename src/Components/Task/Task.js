import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

import './task.css';
import InputForm from '../InputForm/InputForm';

export default class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tomatoActive: false
        };
    }


    render(){
        return(
            <div className='task'>
                <Container fluid>
                    <InputForm />
                </Container>
            </div>
        );
    }
}