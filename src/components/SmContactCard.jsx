import Card from 'react-bootstrap/Card';

function SmContactCard (props){
    const {contact} = props;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{contact.fname}{contact.lname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{contact.phone}</Card.Subtitle>
                <Card.Text>
                    {contact.address}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default SmContactCard;