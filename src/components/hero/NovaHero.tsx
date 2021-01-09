import React, { RefObject, useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rellax from "rellax";
import "./NovaHero.css";
import zeromotor from "../../resources/zeromotor.png";
import NovaSponsors from "./NovaSponsors";
import MotorInfo from "./MotorInfo";
import NovaButton from "../NovaButton";
import NovaMission from "./NovaMission";

const NovaHero = () => {
  const screen2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    new Rellax(".rellax", {
      speed: -100,
    });

    window.addEventListener(
      "scroll",
      () => {
        const scroll = window.scrollY / (screen2.current?.offsetHeight || 1);

        document.documentElement.style.setProperty("--scroll", String(scroll));
      },
      false
    );
  });

  return (
    <Container fluid className="heroContainer">
      <div className="rellax polkadots" data-rellax-speed="2"></div>
      <div className="rellax stand" data-rellax-speed="8">
        <svg
          className="stand"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 0,100" className="triangle-pol" />
        </svg>

        <HeroText scrollToRef={screen2} />
      </div>

      <img alt="" className="motor" src={zeromotor}></img>

      <div className="screen invis"></div>
      <div className="screen" ref={screen2}>
        <MotorInfo />
      </div>

      <div className="screen bg-primary">
        <NovaMission />
      </div>

      <div className="screen">
        <NovaSponsors />
      </div>
    </Container>
  );
};

type HeroTextProps = {
  scrollToRef: RefObject<HTMLDivElement>;
};

const HeroText = ({ scrollToRef }: HeroTextProps) => {
  return (
    <Container fluid>
      <Row>
        <Col sm={4} className="align-self-center">
          <div className="herotext">
            <h1>No Limits.</h1>
            <p>
              Since 2007, Nova Electric Racing has been pushing the boundaries
              of innovation by developing and racing high performance
              sustainable racing motorcycles. Our vision is one of a future
              where there is no compromise between performance and
              sustainability.
            </p>
            <NovaButton
              className="herobutton"
              variant="outline-light"
              onClick={(e) => {
                e.preventDefault();
                scrollToRef.current?.scrollIntoView(false);
              }}
            >
              LEARN MORE
            </NovaButton>
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
};

export default NovaHero;
