import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NovaButton from "../NovaButton";

export default () => {
  return (
    <Container style={{ height: "100%" }}>
      <Row style={{ height: "100%" }} className="align-items-center">
        <Col>
          <h1 className="display-4">Our mission</h1>
          <p>
            Nova Electric Racing is a D:DREAM Team of the Delft University of
            Technology that consists of interdisciplinary and international
            students. “The D:DREAM status is not something that every student
            project receives. D:DREAM stands for ‘Delft: Dream Realization of
            Extremely Advanced Machines.’ These machines can be anything, from
            human powered submarines to hydrogen driven race cars. They are
            characterized by the fact that they are for example extremely
            fuel-efficient, powered on sustainable energy or technically
            innovative.” – TU Delft
          </p>
          <NovaButton variant="dark">READ MORE</NovaButton>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};
