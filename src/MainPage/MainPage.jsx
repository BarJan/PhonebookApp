import { useState } from "react";
import { Container } from "react-bootstrap";
import LgContactCard from "../components/LgContactCard";
import SmContactCard from "../components/SmContactCard";
import ContactModel from "../models/ContactModel";

function MainPage(){

    const [contact,setContact] = useState(new ContactModel({name: "bar janah", username: "barjan", email: "bla@gmail.com", address: {street: "hertzel", suite: "865", city: "TLV", geo: {lat: "34.5456", lng: "34.5456"}}, phone: "0525252522", website: "httpblabla.com", company: {name:"vla", catchPhrase: "blaPhrase", bs: "bs"}}));
    const [renderDetails, setRenderDetails] = useState(false);
    
    function handleOpenClick(clickedContact){
        setContact(clickedContact);
        setRenderDetails(true);
    }

    function handleCloseClick(){
        setRenderDetails(false);
    }

    return(
        <Container>
            {renderDetails ? <LgContactCard contact={contact} onClick={handleCloseClick}/> : <SmContactCard contact={contact} onClick={handleOpenClick}/>}
        </Container>
    )
}

export default MainPage;