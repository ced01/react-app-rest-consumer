export default class Event {

        id= 0;
        date= '2018-12-12T18:00:00Z';
        title= 'Full Stack Reactive';
        description= 'Reactive with Spring Boot + React';
        attendees= [];
        removed=false;

        constructor(data){
            this.id = data.id;
            this.date = data.date;
            this.title = data.title;
            this.description = data.description;
            this.attendees = data.attendees;
            this.removed = data.removed;
        }
}
