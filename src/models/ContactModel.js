class ContactModel{
    constructor(jsonObject){
        this.id =       jsonObject.id;
        this.name =     jsonObject.name;
        this.username = jsonObject.username;
        this.email =    jsonObject.email;
        this.address =  {
            street:     jsonObject.address.street,
            suite:      jsonObject.address.suite,
            city:       jsonObject.address.city,
            geo:        {
                lat:    jsonObject.address.geo.lat,
                lng:    jsonObject.address.geo.lng
            },
        };
        this.phone =    jsonObject.phone;
        this.website =  jsonObject.website;
        this.company =  {
            name:       jsonObject.company.name,
            catchPhrase:jsonObject.company.catchPhrase,
            bs:         jsonObject.company.bs
        }
    }
}

export default ContactModel;