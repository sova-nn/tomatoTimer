import React from 'react';
import {Form, Col, Row, Button} from 'react-bootstrap';

import './input-form.css';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: "",
            plainText: false
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
        alert("Задача: *" + this.state.task + "* добавлена");
    }

    render() {
        return (
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
                        <Button type="submit" >Добавить</Button>
                    </Col>
                </Row>
            </Form>

        );
    }
}