import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NovaButton from "../NovaButton";
import "./NovaHeroTeamSocial.css";

const NovaTeamSocial = () => {
  return (
    <Container fluid className="h-100 bg-dark">
      <Row className="h-100">
        <Col sm={6}>
          <NovaTeam />
        </Col>
        <Col sm={6}>
          <NovaSocial />
        </Col>
      </Row>
    </Container>
  );
};

const NovaTeam = () => {
  return (
    <Container className="p-5">
      <Row>
        <h1 className="display-4">Team 12</h1>
      </Row>
      <Row>
        <p>Meet the team working hard on the next generation Nova Bike!</p>
      </Row>
      <Row>
        <div className="insta border"></div>
      </Row>
      <Row>
        <NovaButton className="mt-3" variant="primary">
          VIEW ALL TEAMS
        </NovaButton>
      </Row>
    </Container>
  );
};

const NovaSocial = () => {
  return (
    <Container className="p-5 h-100">
      <Row>
        <Col className="p-0">
          <h1 className="display-4">Social Media</h1>
        </Col>
        <Col sm="auto" className="align-self-center">
          <p>I</p>
        </Col>
      </Row>
      <Row>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ut
          aut omnis veniam laudantium, vel culpa, vero fuga sit sed iure
          mollitia dignissimos porro itaque molestias adipisci, maxime esse
          possimus.
        </p>
      </Row>
      <Row>
        <div className="insta border"></div>
      </Row>
    </Container>
  );
};

export default NovaTeamSocial;
