
import GroupMock from '../../springapimock/group/GroupMock';



export default class Requests {

    getAllGroupApiEndPoint = '';
    postSingleGroup = '';
    succesMsgResponse = '';
    errorMsgResponse = '';

    constructor(){
        this.getAllGroupApiEndPoint = '/api/groups';
        this.postSingleGroup = '/api/addGroup';
        this.succesMsgResponse = 'Successfuly connected to spring server or json server';
        this.errorMsgResponse = 'Server is not responding';
    }

    async getAllGroups(){
        let data = null;
        await fetch(this.getAllGroupApiEndPoint)
            .then(async (response)=>{
            data = response.ok ? await response.json().then((res) => res) : await new GroupMock().generate(); 
            data ? console.log(this.succesMsgResponse) : console.log(this.errorMsgResponse);     
        });
        console.log(data);
        return data;
    }

}