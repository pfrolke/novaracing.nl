import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MotorInfoBubble from "./MotorInfoBubble";

function MotorInfoPage() {
  return (
    <Container style={{ height: "100%" }} fluid>
      <Row>
        <Col>
          <MotorInfoBubble></MotorInfoBubble>
        </Col>
      </Row>
      <Row>
        <Col>
          <MotorInfoBubble></MotorInfoBubble>
        </Col>
      </Row>
      <Row>
        <Col>
          <MotorInfoBubble></MotorInfoBubble>
        </Col>
      </Row>
    </Container>
  );
}

export default MotorInfoPage;
