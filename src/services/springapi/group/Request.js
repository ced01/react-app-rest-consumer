
import GroupMock from '../../springapimock/group/GroupMock';

import request from '';

export default class Requests {

    getAllGroupApiEndPoint = '';
    postSingleGroup = '';
    succesMsgResponse = '';
    errorMsgResponse = '';

    constructor(){
        this.getAllGroupApiEndPoint = '/api/groups';
        this.postSingleGroup = '/api/addGroup';
        this.succesMsgResponse = 'Successfuly connected to spring server';
        this.errorMsgResponse = 'Server is not responding';
    }

    async getAllGroups(){
        let data = null;
        await fetch(this.getAllGroupApiEndPoint)
            .then(async (response)=>{
            data = response.ok ? await response.json().then((res) => res) : new GroupMock().generate(); 
            data ? console.log(this.succesMsgResponse) : console.log(this.errorMsgResponse);     
        });
        return data;
    }

}