import React from 'react';
import {Form, Col, Row, Button, Container} from 'react-bootstrap';

import './input-form.css';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            plainText: false,
            button: true,
        };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        let val = e.target.value;
        this.setState({task: val});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({plainText: true});
        alert("Задача: " + this.state.task + " добавлена");
    }

    buttonInvisible = () => {
        this.setState({button:false, plainText: true})
    }

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit} className='input-form' >
                    <Row>
                        <Col xs={10}>
                            <Form.Control type="text"
                                          plaintext={this.state.plainText}
                                          placeholder="Добавить цель"
                                          value={this.state.task}
                                          onChange={this.onChange} />
                        </Col>
                        <Col xs={2}>
                            {this.state.button
                            &&
                            <Button type="submit"
                                    onClick={()=>{
                                        this.props.addTarget();
                                        this.props.addTask();
                                        this.buttonInvisible();}}>
                                    Добавить</Button>}
                        </Col>
                    </Row>
                </Form>
            </Container>

        );
    }
}