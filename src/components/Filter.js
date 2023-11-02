import { useState } from "react";
import { Col, Container, Dropdown, ListGroup, Row } from "react-bootstrap";
// import "./styles.css";


export default function Filter() {
  const filterMenuOptions = {
    // Size: ["XS", "S", "M", "L", "XL"],
    // Color: ["Red", "Green", "Blue", "Black", "White"],
    // For: ["Men", "Women", "Children", "Infants"]
    Type: ["Journal", "Conference", "Technical"]
  };
  const [selectedFilterOption, setSelFilterOption] = useState(
    Object.keys(filterMenuOptions)[0]
  );

  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning">Filter</Dropdown.Toggle>
      <Dropdown.Menu>
        <Container>
          <Row style={{ minWidth: "50vw" }}>
            <Col>
              <ListGroup variant="flush">
                {Object.keys(filterMenuOptions).map((fKey, id) => (
                  <ListGroup.Item
                    key={id}
                    action
                    active={selectedFilterOption === fKey}
                    onClick={() => setSelFilterOption(fKey)}
                    variant="success"
                  >
                    {fKey}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
            <Col>
              <ListGroup>
                {filterMenuOptions[selectedFilterOption].map((option, id) => (
                  <Row key={id}>
                    <Col xs="2">
                      <input type="checkbox" />
                    </Col>
                    <Col>
                      <p>{option}</p>
                    </Col>
                  </Row>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}
