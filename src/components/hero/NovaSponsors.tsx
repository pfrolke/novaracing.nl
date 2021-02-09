import React, { useCallback, useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./NovaSponsors.css";
import BoxkingItLogo from "../../resources/sponsors/bokxingit-logo-300.jpg";
import FactaLogo from "../../resources/sponsors/facta-logo-300.jpg";
import LelyLogo from "../../resources/sponsors/lely-logo-300.jpg";
import PCWLogo from "../../resources/sponsors/pcw-logo-300.jpg";
import StudLogo from "../../resources/sponsors/stud-logo-300.jpg";
import TUDLogo from "../../resources/sponsors/tud-logo-300.jpg";
import VMILogo from "../../resources/sponsors/vmi-logo-300.jpg";

const NovaSponsors = () => {
  return (
    <Container fluid className="sponsors py-5">
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

      <div className="car-cont">
        <SponsorCarousel />
      </div>

      <Row>
        <Col sm="auto" className="mx-auto">
          <Button variant="outline-dark">VIEW ALL SPONSORS</Button>
        </Col>
      </Row>
    </Container>
  );
};

const SponsorCarousel = () => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [cur, setCur] = useState(0);

  const prev = () => {
    if (cur - 1 < 0) {
      setCur(4);
    } else {
      setCur(cur - 1);
    }
  };

  const next = useCallback(() => {
    setCur((c) => (c + 1) % 5);
  }, []);

  useEffect(() => {
    if (rowRef.current !== null) {
      rowRef.current.scrollLeft = (cur * rowRef.current.scrollWidth) / 7;
    }
  }, [cur]);

  useEffect(() => {
    setInterval(() => {
      next();
    }, 5000);
  }, [next]);

  return (
    <Container fluid className="my-5">
      <Row className="sponsor-carousel" ref={rowRef}>
        <Col sm="4" className="my-auto">
          <a
            href="https://www.lely.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="Lely"
              className="sponsorlogo mx-auto"
              src={LelyLogo}
            />
          </a>
        </Col>
        <Col sm="4" className="my-auto">
          <a
            href="https://www.stud.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="STUD"
              className="sponsorlogo mx-auto"
              src={StudLogo}
            />
          </a>
        </Col>
        <Col sm="4" className="my-auto">
          <a
            href="https://www.facta.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="Facta"
              className="sponsorlogo mx-auto"
              src={FactaLogo}
            />
          </a>
        </Col>
        <Col sm="4" className="my-auto">
          <a
            href="https://bokxing-it.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="BOXKING IT"
              className="sponsorlogo mx-auto"
              src={BoxkingItLogo}
            />
          </a>
        </Col>

        <Col sm="4" className="my-auto">
          <a
            href="http://www.poedercoatwestland.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="Poeder Coat Westland"
              className="sponsorlogo mx-auto"
              src={PCWLogo}
            />
          </a>
        </Col>
        <Col sm="4" className="my-auto">
          <a
            href="https://www.tudelft.nl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="TU Delft"
              className="sponsorlogo mx-auto"
              src={TUDLogo}
            />
          </a>
        </Col>
        <Col sm="4" className="my-auto">
          <a
            href="https://www.vmi-group.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              width="300px"
              alt="VMI"
              className="sponsorlogo mx-auto"
              src={VMILogo}
            />
          </a>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm="auto">
          <span className="car-nav" onClick={prev}>
            &lt;
          </span>
        </Col>

        <Col sm="auto">
          {Array.from(new Array(5), (x, i) => (
            <span
              className={`car-nav car-nav-bullet ${
                cur === i ? "car-nav-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setCur(i);
              }}
            />
          ))}
        </Col>

        <Col sm="auto">
          <span className="car-nav" onClick={next}>
            &gt;
          </span>
        </Col>
      </Row>
    </Container>
  );
};

export default NovaSponsors;
