import React, { Component } from "react";

class Menu extends Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.study.map((steps) => <li>{steps}</li>)}
                </ul>
            </div>
        );
    }
}
export default Menu;