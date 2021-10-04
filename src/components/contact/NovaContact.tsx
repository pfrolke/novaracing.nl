import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NovaContact.css";
import NovaFooter from "../NovaFooter";

const NovaContact = () => {
  return (
    <>
      <div className="polkadots about-bg" />'
      <Container fluid className="p-5">
        <NovaContactCard />
        <NovaContactForm />
      </Container>
      '
      <NovaFooter />
    </>
  );
};

const NovaContactCard = () => {
  return (
    <Row className="ddream">
      <Col className="ddream-txt p-5">
        <h1>Contact</h1>
        <h5>Team manager</h5>
        <p>Kane IJdo</p>
        <h5>Contact</h5>
        <p>
          E-mail: info@novaracing.nl
          <br />
          Tel: +31 (0) 15 278 92 18
        </p>
        <h5>Adress</h5>
        <p>
          Stevinweg 1
          <br />
          2628 CN Delft
          <br />
          The Netherlands
        </p>
        <h5>Chamber of Commerce</h5>
        <p>
          BTW (tax) number: NL 8203 60 430 B01
          <br />
          KvK (CoC) number: 27 335 188
        </p>
      </Col>
      <Col className="ddream-txt p-5">
        <iframe
          title="TU Delft - Dream Hall"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://maps.google.com/maps?q=TU%20Delft%20Dream%20Hall&t=m&z=15&output=embed&iwloc=near"
        ></iframe>
      </Col>
    </Row>
  );
};

const NovaContactForm = () => {
  return (
    <Row className="ddream">
      <Col className="ddream-txt p-5">
        <h1>Contact Form</h1>
      </Col>
      <Col className="ddream-txt p-5"></Col>
    </Row>
  );
};

export default NovaContact;
