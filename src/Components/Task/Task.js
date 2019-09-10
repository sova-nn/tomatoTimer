import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import InputForm from '../InputForm/InputForm';
import TomatoTimer from "../TomatoTimer/TomatoTimer";
import ActionButton from "../ActionButton/ActionButton";
import './task.css';


export default function Task(props) {
    const [activeTomato, setActiveTomato] = useState(false);
    const [timerIsVisible, setTimerIsVisible] = useState(false);

    function addTarget() {
        setTimerIsVisible(true);
    }

    return(
        <Container fluid className='task'>
            <Row>
                <Col>
                    <InputForm addTarget={addTarget} addTask={props.addTask}/>
                </Col>
                <Col>
                    <ActionButton
                        onClick={() => setActiveTomato(!activeTomato)}
                        timerIsVisible={timerIsVisible}
                        />
                </Col>
            </Row>
            {
                activeTomato
                &&
                <Row>
                    <Col>
                        <TomatoTimer activeTimer={activeTomato}/>
                    </Col>
                </Row>
            }

        </Container>

    );
}