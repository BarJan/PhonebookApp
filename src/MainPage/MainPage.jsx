import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import LgContactCard from "../components/LgContactCard/LgContactCard";
import SmContactCard from "../components/SmContactCard/SmContactCard";
import ContactModel from "../models/ContactModel";


function MainPage(){

    const [contacts,setContacts] = useState([]);//new ContactModel({id: 1992,name: "bar janah", username: "barjan", email: "bla@gmail.com", address: {street: "hertzel", suite: "865", city: "TLV", geo: {lat: "34.5456", lng: "34.5456"}}, phone: "0525252522", website: "httpblabla.com", company: {name:"vla", catchPhrase: "blaPhrase", bs: "bs"}}));
    const [detailedContact, setDetailedContact] = useState();
    const [renderDetails, setRenderDetails] = useState(false);
    
    //on page load\render, requesting and getting all contacts. till getting we will render a spinner
    useEffect(() => {
        axios.get('/api/users').then(res=>{
            const newContacts = res.data.map((contact)=> new ContactModel(contact));
            setContacts(newContacts);
    });
    },[])


    //by clicking on a contact card, render a single contact card with all details about that contact
    function handleOpenClick(clickedContact){
        setDetailedContact(clickedContact);
        setRenderDetails(true);
    }

    //by clicking on the single card on the contact's page, return to the main page with all contacts' cards
    function handleCloseClick(){
        setRenderDetails(false);
    }

    //converting each contact to a SmContactCard which renders a card with conact's name, phone and address
    const phonebookContacts = contacts.map((contact,index) => <SmContactCard key={index} contact={contact} onClick={handleOpenClick}/>);

    return(
        <Container>
            {contacts[0] ?
                    (renderDetails ? <LgContactCard contact={detailedContact} onClick={handleCloseClick}/> : phonebookContacts)
                :    <Button variant="outline-secondary" disabled>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />    Loading...
                    </Button>}          
        </Container>
    )
}

export default MainPage;