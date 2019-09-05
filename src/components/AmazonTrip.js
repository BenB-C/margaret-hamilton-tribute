import React from 'react';
import { Card } from 'react-bootstrap'

function AmazonTrip() {
  return (
    <div className="">
    <Card style={{ width: '18rem' }}>
    <Card.Body>
    <Card.Title>Trip To Saturn</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Move to Saturn</Card.Subtitle>
    <Card.Text>
    Win a trip to Saturn sans oxygen
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
    </Card.Body>
    </Card>
    </div>
  );
}

export default AmazonTrip;
