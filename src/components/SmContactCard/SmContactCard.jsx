import { Col, Container, Row } from 'react-bootstrap';
import "./SmContactCard.css";
function SmContactCard (props){

    const {contact, onClick} = props;

    return (
            <Row className="SmCard" onClick={() => onClick(contact)} title="Tap for more details">
                <Col>{contact.name}{contact.lname}</Col>
                <Col>{contact.phone}</Col>
                <Col>{contact.address.street + contact.address.city}</Col>
            </Row>
    );
}

export default SmContactCard;