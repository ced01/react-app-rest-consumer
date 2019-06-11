import React, { Component } from 'react';
import {BootstrapTable} from 'react-bootstrap-table';
import ExpandedRow from './Row/ExpandedRow';
import Group  from './Group/Group';
import { Button } from 'reactstrap';

import  AddGroupModal  from '../Shared/AddGroupModal';

import './GroupList.css';

export default class GroupList extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      expanding:[5]
    };
  }

  nameOrder = 'desc';

  sortTableGroupByName(){
    if(this.nameOrder === 'desc') {
      this.refs.table.handleSort('asc', 'name');
      this.nameOrder = 'asc';
    } else {
      this.refs.table.handleSort('desc', 'name');
      this.nameOrder = 'desc';
    }
  }

  isExpandableRow() {
     return true;
  }

  expandComponent(row) {
    return (
      <ExpandedRow className="row" data={ row  } />
    );
  }
  render() {
      const tableOptions = {
        noDataText: 'No groups found',
        expanding: this.state.expanding
      };
      return (
        <div className="group-list-body">
          <AddGroupModal/>
          <div className="sort-buttons-area">
            <Button onClick={() => this.sortTableGroupByName()} color="primary">Sort by name</Button>
          </div>
          <BootstrapTable ref='table' 
                          data={this.props.groups}
                          search
                          expandableRow={ this.isExpandableRow }
                          expandComponent={ this.expandComponent }
                          trClassName='rowStyle' 
                          options={ tableOptions }
                          condensed 
                          scrollTop={ 'Bottom' }
                          version='4'
                          >

              <Group isKey={true}
                     dataField='name'
                     dataName = 'Group name'
                     columName='Group name' 
                     dataSort 
                     searchable
                     editable
                   
              />
              <Group isKey={false}
                     dataField='city'
                     dataName = 'City'
                     columName='City' 
                     dataSort 
                     searchable
                     editable
                    
              />
          </BootstrapTable>
        </div>
      );
    }
}