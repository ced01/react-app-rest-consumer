import jsonGroupData from '../files/groups.json';
import Group from '../../../model/Group';

export default class GroupMock {

    data = null;
    array = [];

    constructor(){
        this.data = jsonGroupData;
    }

    generate(){
        let msgs = []
        
        this.data.map(( groupData ) => {
            this.array.push(new Group(groupData));
            msgs.push("group:"+groupData.id+" mocked succesfully");
            return msgs;
        });

        msgs.forEach(msg => {
            console.log(msg);
            return 0;
        });

        return this.array;
    }

}
