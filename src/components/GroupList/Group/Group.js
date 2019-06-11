import React, { Component } from 'react';
import {TableHeaderColumn} from 'react-bootstrap-table';

import './Group.css';

export default class Group extends Component {
    render() {
      return (
        <TableHeaderColumn isKey={this.props.isKey} 
                           dataField={this.props.name}
                           dataName={this.props.name}
                           searchable={ this.props.searchable }
                           dataSort
                           className='columnStyle'
        >                  
                           {this.props.columName}
        </TableHeaderColumn>
      );
    }
}