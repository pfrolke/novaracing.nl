import React, { RefObject, useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./NovaHero.css";
import zeromotor from "../../resources/zeromotor.png";
import NovaSponsors from "./NovaHeroSponsors";
import MotorInfo from "./NovaHeroMotorInfo";
import NovaButton from "../NovaButton";
import NovaMission from "./NovaHeroMission";
import NovaTeamSocial from "./NovaHeroTeamSocial";
import NovaFooter from "../NovaFooter";

const NovaHero = () => {
  const screen2 = useRef<HTMLDivElement>(null);

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // calculate scroll position as a fraction of the viewport height
    window.addEventListener(
      "scroll",
      () => {
        const scroll = window.scrollY / (screen2.current?.offsetHeight || 1);

        document.documentElement.style.setProperty("--scroll", String(scroll));

        if (scroll >= 1) {
          setStartAnimation(true);
        } else if (scroll <= 0.8) {
          setStartAnimation(false);
        }
      },
      false
    );
  });

  return (
    <Container fluid className="heroContainer">
      <div className="polkadots" />
      <div className="stand">
        <svg
          className="stand triangle-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="0,0 100,0 0,100" className="triangle-pol" />
        </svg>

        <HeroText scrollToRef={screen2} />
      </div>

      <img alt="" className="motor" src={zeromotor} />

      <div className="screen"></div>
      <div className="screen" ref={screen2}>
        <MotorInfo startAnimation={startAnimation} />
      </div>

      <div className="screen bg-primary">
        <NovaMission />
      </div>

      <div className="screen">
        <NovaSponsors />
      </div>

      <div className="screen">
        <NovaTeamSocial />
      </div>

      <NovaFooter />
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
            <h1 className="display-1">No Limits.</h1>
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
