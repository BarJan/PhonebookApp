import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LgContactCard from "../components/LgContactCard";
import SmContactCard from "../components/SmContactCard";
import ContactModel from "../models/ContactModel";

function MainPage(){

    const [contact,setContact] = useState(new ContactModel({id: 1992,name: "bar janah", username: "barjan", email: "bla@gmail.com", address: {street: "hertzel", suite: "865", city: "TLV", geo: {lat: "34.5456", lng: "34.5456"}}, phone: "0525252522", website: "httpblabla.com", company: {name:"vla", catchPhrase: "blaPhrase", bs: "bs"}}));
    const [renderDetails, setRenderDetails] = useState(false);
    
    let test;

    useEffect(() => {
        axios.get('/api/users').then(res=>{
            console.log(res.data);
            const contacts = res.data.map((contact)=> new ContactModel(contact));
           // test = contacts[0].name;
            // const contacts = res.data.map((contact)=> new ContactModel(contact));
            setContact(contacts[0]);
    });
    },[])

    function handleOpenClick(clickedContact){
        setContact(clickedContact);
        setRenderDetails(true);
    }

    function handleCloseClick(){
        setRenderDetails(false);
    }

    return(
        <Container>
            {contact.name}
            {renderDetails ? <LgContactCard contact={contact} onClick={handleCloseClick}/> : <SmContactCard contact={contact} onClick={handleOpenClick}/>}
        </Container>
    )
}

export default MainPage;