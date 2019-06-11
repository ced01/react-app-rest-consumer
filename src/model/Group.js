import  Event  from './Event';

export default class Group {
    
        id = 0;
        name = 'Mocked JUG';
        address = "51 rue de l'imposible";
        city= '';
        stateOrProvince= null;
        country= null;
        postalCode= null;
        user= null;
        groupEvents = [];

        constructor(data){
            this.id = data.id;
            this.name = data.name;
            this.city = data.city;
            this.address = data.address;
            this.stateOrProvince = data.stateOrProvince;
            this.country = data.country;
            this.postalCode = data.postalCode;
            this.user = data.user;

            data.events.map(( eventData )=>{
                return this.groupEvents.push(new Event(eventData));
            });
        }
    
}
