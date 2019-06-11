import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import  DeleteEventModal  from '../../Shared/DeleteEventModal';

import { Container, Row, Col } from 'reactstrap';

import './ExpandedRow.css';


 

class ExpandedRow extends Component {
    
    render() {
      const location = this.props.data.address ? <Media left><Media heading> Address </Media> { this.props.data.address }</Media> : "No adress";
      let titleEvents = <Media> No events </Media>;
      
      let   colComponent = null,
            rowComponent = null, 
            cdElement = null,
            arrColComponent = [],
            arrRowComponent = [];

      let events = this.props.data.events === undefined ? this.props.data.groupEvents : this.props.data.events;
      
      if(events.length !== 0){

        titleEvents = <Media heading> Events </Media>;
        events.map((ev)=>{
            if(ev.title && ev.description && ev.date && !ev.removed){
                cdElement = (<Card>
                                <CardBody>
                                    <CardTitle className="title">
                                        <Row>
                                            <Col xs="10" sm="10">
                                                {ev.title}
                                            </Col>
                                            <Col xs="2" sm="2" className="deleteEvent">
                                                <DeleteEventModal event={ev} expandedRow={this}></DeleteEventModal>
                                            </Col>
                                        </Row>
                                    </CardTitle>
                                    <CardSubtitle>{ev.date}</CardSubtitle>
                                    <CardText className="desc">
                                       {ev.description}
                                    </CardText>
                                </CardBody>
                            </Card>);
                arrColComponent.push(<Col xs="12" sm="6">{cdElement}</Col>);
            }
            return (<div>{colComponent}</div>);
        });
        
        for(let i = 0; i < arrColComponent.length; i+=2){
            rowComponent = <Row className="eventRow">{arrColComponent[i]}</Row>
            if(arrColComponent[i+1] !== undefined){
                rowComponent =  <Row key={i} className="eventRow">{arrColComponent[i]}{arrColComponent[i+1]}</Row>
            }
            arrRowComponent.push(rowComponent);
        }
        
      }
      
      if (this.props.data) {
        let index = 0;  
        const rows = arrRowComponent.map((row) => { return <span key={index++}>{row}</span>; })
        return (
            <Container className="mediaContainer">
                <Row>
                    <Col xs="2" sm="2">{ location }</Col>
                    <Col xs="10" sm="10">
                        <Container className="events">
                            { titleEvents }
                            { rows }
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
      } else {
        return (<p>No informations</p>);
      }
    }
  }

  export default ExpandedRow;