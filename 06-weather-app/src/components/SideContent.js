import React from 'react'
import { Card, CardBody, CardText, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';
import '../App.css';

function SideContent() {
  return (
    <div className='sideContent' >
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Card"
    src="https://picsum.photos/300/200"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card Title
    </CardTitle>
    <CardText>
      This is some text within a card body.
    </CardText>
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
      An item
    </ListGroupItem>
    <ListGroupItem>
      A second item
    </ListGroupItem>
    <ListGroupItem>
      And a third item
    </ListGroupItem>
  </ListGroup>
 
</Card>
    </div>
  )
}

export default SideContent