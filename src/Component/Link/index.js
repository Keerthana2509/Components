import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

export default class Linker extends React.Component {
    render() {
        return (
            <div className="container link">
                <a href="#!">Learn React in 1 month</a>
            </div>
        );
    }
}