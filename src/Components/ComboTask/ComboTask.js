import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Task from "../Task/Task";

import TomatoTimer from "../TomatoTimer/TomatoTimer";
import ActionButton from "../ActionButton/ActionButton";

export default function ComboTask() {


    return(
        <Container fluid className='combo-task'>
            <Row>
                <Col>
                    <Task />
                </Col>
                <Col>
                    <ActionButton />
                </Col>
            </Row>
            <TomatoTimer />
        </Container>

    );
}