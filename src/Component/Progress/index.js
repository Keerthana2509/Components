import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

export default class Status extends React.Component {
    render() {
        return (
            <div className="container layout">
                <ProgressBar animated variant="success" now= {40}/>
            </div>
        );
    }
}