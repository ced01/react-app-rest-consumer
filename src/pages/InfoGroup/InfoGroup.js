import React, { Component } from 'react';
import  GroupList  from '../../components/GroupList/GroupList';
import  Request from '../../services/springapi/group/Request';
import { Spinner } from 'reactstrap';

import './InfoGroup.css';

export default class Home extends Component {
    state = {
        isLoading: true,
        noResponseFromServer:false,
        groups: []
    };
    
    async componentDidMount() {
        if(this.state.groups.length === 0){
            new Request().getAllGroups().then((res)=> {
                this.setState({ groups: res, isLoading: false });
            });
        }
    }

    render() {
        const {groups, isLoading} = this.state;

        if (isLoading) {
            return (
                <div className="loader-body">
                    <Spinner type="grow" color="info" />
                </div>
            );
        }      
        return (
            <div className="home-body">
                <GroupList groups={groups} />
            </div>
        );
    }
}