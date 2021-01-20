import SmContactCard from "../components/SmContactCard";
import ContactModel from "../models/ContactModel";

function MainPage(){

    const contact = new ContactModel("bar","janah","enin hanatziv", "0525252522")

    return(
        <SmContactCard contact={contact}/>
    )
}

export default MainPage;