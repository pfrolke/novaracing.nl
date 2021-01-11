import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./NovaSponsors.css";
import { ReactComponent as StudLogo } from "../../resources/stud-logo.svg";

const NovaSponsors = () => {
  return (
    <Container fluid className="sponsors p-5">
      <Row>
        <Col sm="auto" className="mx-auto">
          <h1 className="display-4">Sponsors</h1>
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mx-auto">
          <p>
            Nova Electric Racing would not be possible without our sponsors.
          </p>
        </Col>
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
};

const SponsorCard = () => {
  return (
    <Col className="m-3" sm="auto">
      <StudLogo className="logo" />
    </Col>
  );
};

export default NovaSponsors;
