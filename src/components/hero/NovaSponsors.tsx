import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./NovaSponsors.css";
import { ReactComponent as StudLogo } from "../../resources/stud-logo.svg";

function NovaSponsors() {
  return (
    <Container fluid className="sponsors p-5">
      <Row>
        <Col />
        <Col sm="auto">
          <h1 className="display-4">Sponsors</h1>
        </Col>
        <Col />
      </Row>
      <Row>
        <Col />
        <Col sm="auto">
          <p>
            Nova Electric Racing would not be possible without our sponsors.
          </p>
        </Col>
        <Col />
      </Row>

      <Row className="justify-content-center">
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </Row>

      <Row className="justify-content-center">
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
        <SponsorCard />
      </Row>

      <Row>
        <Col />
        <Col sm="auto">
          <Button
            className="sponsorbutton"
            variant="outline-dark"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            MORE INFO
          </Button>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

function SponsorCard() {
  return (
    <Col className="m-3" sm="auto">
      <StudLogo className="logo" />
    </Col>
  );
}

export default NovaSponsors;
