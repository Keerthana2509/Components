import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class ChangeOfText extends Component {
    constructor() {
        super();
        this.state = {
            text :"Old text"
        };
    }
    changetext() {
        this.setState({
            text: "New text"
        });
    }
    render() {
        return(
            <div>
                <p id="change">{this.state.text}</p>
                <Button onClick={this.changetext.bind(this)}>Change</Button>
            </div>
        );
    }
}
export default ChangeOfText;