import React, { Component } from 'react';
import { 
         Button, 
         Modal, 
         ModalHeader, 
         ModalBody, 
         ModalFooter,
         Form,
         FormGroup,
         InputGroup, 
         InputGroupAddon,  
         Input 
} from 'reactstrap';

import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import ClearIcon from '@material-ui/icons/Clear';

import Request from '../../services/springapi/group/Request';

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
class AddGroupModal extends Component {
  
  postSingleGroup = null;
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.postSingleGroup = new Request().postSingleGroup;
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const classes  = this.props.classes;
    return (
      <div>
      <Button color="primary" onClick={this.toggle}>Add group</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <Form action={this.postSingleGroup}>
          <ModalHeader toggle={this.toggle}> Add a new group </ModalHeader>
          <ModalBody>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button>Gro. name</Button>
                </InputGroupAddon>
                <Input name="name" /> 
              </InputGroup><br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <Button>Group city</Button>
                </InputGroupAddon>
                <Input name="address" /> 
              </InputGroup>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="success">Add group</Button>{' '}
            <Button color="primary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles)(AddGroupModal);