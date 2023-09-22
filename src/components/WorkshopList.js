import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const workshops = [
  {
    name: 'Workshop 1',
    date: 'October 10, 2023',
    registrationLink: 'https://example.com/workshop1-registration',
  },
  {
    name: 'Workshop 2',
    date: 'October 15, 2023',
    registrationLink: 'https://example.com/workshop2-registration',
  },
  {
    name: 'Workshop 2',
    date: 'October 15, 2023',
    registrationLink: 'https://example.com/workshop2-registration',
  }
  // Add more workshop objects as needed
];

const WorkshopList = () => {
  return (
    <Container>
      <h1>Current Workshops</h1>
      <Row>
        {workshops.map((workshop, index) => (
          <Col key={index} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{workshop.name}</Card.Title>
                <img src="https://www.getmyuni.com/assets/images/articles/articles-b03a809fc0f06118f4b790dbd1d0243a.webp" alt="risk" className='w-10'/>
                <Card.Text>Date: {workshop.date}</Card.Text>
                <Button variant="primary" href={workshop.registrationLink} target="_blank">
                  Register
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WorkshopList;

