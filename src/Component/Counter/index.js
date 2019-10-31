import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }
    increament() {
        this.setState({
            count: this.state.count + 1
        });
    }
    decreament () {
        this.setState({
            count: this.state.count - 1
        });
    }
    render() {
        return (
            <div>
            <p>Count : {this.state.count}</p>
            <Button  className="btn-primary position" onClick={this.increament.bind(this)}>
                    Plus
            </Button>
           
            <Button  className="btn-primary" onClick={this.decreament.bind(this)}>
                    Minus
            </Button>
            </div>
        );
    }
}