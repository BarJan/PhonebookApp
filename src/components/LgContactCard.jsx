import Card from 'react-bootstrap/Card';

function LgContactCard (props){
    const {contact, onClick} = props;

    return (
        <Card style={{ width: '18rem' }} onClick={() => onClick()}>
            <Card.Body>
                <Card.Title>{contact.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{contact.phone}</Card.Subtitle>
                <Card.Text>
                    {contact.address.street +" "+ contact.address.city}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default LgContactCard;