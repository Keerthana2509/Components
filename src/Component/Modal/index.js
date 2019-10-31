import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Popup extends Component {
    render() {
        return(
            <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Why React?</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>React is a Framework.It creats a view for web pages.
                </p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>
            </Modal.Dialog>
        );
    }
}
export default Popup; 