// Events.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Event from './Event';

function Events() {
  
  const events = [
    { name: 'Event 1', description: 'Description of Event 1', price: 10, nbTickets: 100, nbParticipants: 50, like: 20 },
    
  ];

  return (
    <Container>
      <h2 className="mt-3 mb-3">Events</h2>
      {events.map((event, index) => (
        <Event key={index} {...event} />
      ))}
    </Container>
  );
}

export default Events;
