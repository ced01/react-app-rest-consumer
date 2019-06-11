import jsonGroupDataFromApp from '../files/groups.json';
import Group from '../../../model/Group';

export default class GroupMock {

    data = null;
    mockServerUrl = null;
    array = [];

    constructor(){
        this.data = jsonGroupDataFromApp;
        this.mockServerUrl = "/jsonservergroups"
    }

    async generate(){
        let msgs = []
        await fetch(this.mockServerUrl)
            .then(async (response)=>{
            this.data = response.ok ? await response.json().then((res) => res) : this.data;  
            this.data.map(( groupData ) => {
                this.array.push(groupData);
                msgs.push("group:"+groupData.id+" mocked succesfully");
                return msgs;
            });
            msgs.forEach(msg => {
                console.log(msg);
                return 0;
            });
        });
        return this.array;
    }
}
