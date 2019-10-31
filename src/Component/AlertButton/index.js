import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert'

class Click extends Component {
    alertmsg() {
        alert("Clicked a button");
    }
    render() {
        return(
            <div>
                <Button variant= {this.props.variant} onClick={this.alertmsg}>
                    {this.props.text} 
                </Button>
            </div>
        );
    }
}
export default Click;