import React ,{Component} from 'react';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

class Details extends Component{
    render() {
        return (
            <Card className="main_card container">
            <Card.Body>
            <Card.Title>React</Card.Title>
            <Card.Text>
                React has to import packages that has been exported in othe file to make it work 
                in the local file.
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Learning React is interesting</small>
            </Card.Footer>
        </Card>
        );
    }
}
export default Details;