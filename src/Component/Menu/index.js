import React, {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Drop extends Component {
    render() {
        return (
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Learn
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>React</Dropdown.Item>
                <Dropdown.Item>Bootstrap</Dropdown.Item>
                <Dropdown.Item>HTML</Dropdown.Item>
                <Dropdown.Item>CSS</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        );
    }
}