import { Col, Container, Row } from 'react-bootstrap';

function SmContactCard (props){

    const {contact, onClick} = props;

    return (
        <Container className="SmCard">
            <Row onClick={() => onClick(contact)}>
                <Col>{contact.name}{contact.lname}</Col>
                <Col>{contact.phone}</Col>
                <Col>{contact.address.street + contact.address.city}</Col>
            </Row>
        </Container>
    );
}

export default SmContactCard;