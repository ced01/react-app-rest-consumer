import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
    root: {
        color: theme.palette.primary,
    },
    icon: {
        marginTop: -0.5*theme.spacing.unit,
        fontSize: 16,
    },
    iconHover: {
        '&:hover': {
            color: red[800],
            cursor:'pointer',
        },
    },
}); 
class DeleteEventModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      /*eventdeleted: !this.props.event.removed*/
    };

    this.toggle = this.toggle.bind(this);
    this.delete = this.delete.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  delete(){
    this.props.event.removed = true;
    //console.log(this.props.expandedRow);
    this.props.expandedRow.render();
    console.log(this.props.expandedRow);
    this.toggle();
  }


  render() {
    const classes  = this.props.classes;
    return (
      <div>
      <ClearIcon className={ `${ classes.icon } ${classes.iconHover}`} 
                color="action"
                onClick={this.toggle}
      />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete event warning</ModalHeader>
          <ModalBody>
            Voulez vous vraiment supprimer cet évenement ?<br/> {this.props.event !== undefined ? this.props.event.title : null } 
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.delete}>Delete event</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(DeleteEventModal);