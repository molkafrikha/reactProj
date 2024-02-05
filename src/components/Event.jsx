// Event.js
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import placeholderImage from "../../public/images/placeholder.jpg";


function Event({ name, description, price, nbTickets, nbParticipants, like }) {
  return (
    <Card className="mb-3">
      <Row>
        <Col md={4}>
          <Card.Img variant="top" src={placeholderImage} alt={name} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p>Price: {price}</p>
            <p>Available Tickets: {nbTickets}</p>
            <p>Participants: {nbParticipants}</p>
            <p>Likes: {like}</p>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

export default Event;
