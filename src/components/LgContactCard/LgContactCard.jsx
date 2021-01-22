import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function LgContactCard (props){
    const {contact, onClick} = props;

    return (
        <Container className="lg-card">
            <Card style={{ textAlign: 'left' }} onClick={() => onClick()}>
                <Card.Body>
                    <Card.Title>Name: {contact.name}</Card.Title>
                    <Card.Text >Phone: {contact.phone}</Card.Text>
                    <Card.Text>Email: {contact.email}</Card.Text>
                    <Card.Text className="mb-2 text-muted">Address: {contact.address.street}, {contact.address.city}, {contact.address.suite}, {contact.address.zipcode}</Card.Text>
                    <Card.Text className="mb-2 text-muted">Username: {contact.username}</Card.Text>
                    <Card.Text className="mb-2 text-muted">Website: {contact.website}</Card.Text>
                    <Card.Text className="mb-2 text-muted">Company: {contact.company.name}, {contact.company.catchPhrase}, {contact.company.bs}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LgContactCard;