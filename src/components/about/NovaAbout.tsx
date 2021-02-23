import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryImg from "../../resources/DSC00585.jpg";
import JorelProfile from "../../resources/jorel.jpg";
import DannyProfile from "../../resources/danny.jpg";
import AboutImg from "../../resources/about_header.jpg";
import "./NovaAbout.css";
import NovaFooter from "../NovaFooter";

const NovaAbout = () => {
  return (
    <>
      <NovaAboutHeader />
      <Container fluid>
        <div className="polkadots about-bg" />
        <NovaAboutHistory />
        <NovaAboutDDTEAM />
        <NovaAboutRiders />
      </Container>
      <NovaFooter />
    </>
  );
};

const NovaAboutHeader = () => {
  return (
    <>
      <img
        src={AboutImg}
        alt=""
        width="100%"
        className="px-0 about-header-img"
      />
      <Container fluid className="p-5 about-header">
        <Row>
          <Col sm="auto" className="about-header">
            <h1 className="display-2">
              ABOUT
              <br />
              NOVA
            </h1>
          </Col>
          <Col className="about-header">
            <a href="#history">History</a>
            <a href="#ddream">D:Dream Team</a>
            <a href="#riders">Meet the riders</a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const NovaAboutHistory = () => {
  return (
    <Container fluid className="p-5" id="history">
      <Row>
        <Col className="history-img">
          <img src={HistoryImg} alt="" width="100%" />
        </Col>
        <Col className="history-txt p-5">
          <h1>HISTORY</h1>
          <p>
            The first team was constituted in 2009 with the goal of developing
            sustainable racing motorcycles. The first motorcycles were designed
            to run on bio-ethanol and were used to participate in the European
            Supermono Championship. With advancements in battery technology, the
            team in 2015 decided to switch the objective to developing electric
            motorcycles. Nova Electric Racing is focused on shaping the future.
            We believe that electric racing is the future of motorcycle racing.
            Our goal is to showcase the benefits that electric propulsion can
            have over traditional petrol-powered motorcycles.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

const NovaAboutDDTEAM = () => {
  return (
    <Container fluid className="p-5" id="ddream">
      <Row className="ddream">
        <Col className="ddream-txt p-5">
          <h1>D:DREAM TEAM</h1>
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
            <br />
            <br />
            Our team is located in the D:DREAM Hall where we have our own
            offices and our own workshop. In the hall we share a general
            workplace with a lot of impressive machinery with other D:DREAM
            teams.
          </p>
        </Col>
        <Col className="ddream-txt p-5">
          <iframe
            className="ddream-vid"
            title="Meet D:DREAM!"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/j_sg60vrNVs"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

const NovaAboutRiders = () => {
  return (
    <Container fluid id="riders">
      <Row className="about-riders">
        <Col sm="7" className="mx-auto bg-primary p-5">
          <h1>MEET THE RIDERS</h1>
          <p>
            Racing motorcycles need to be taken to the track to fully showcase
            their capabilities. Each year, our team aims to compete with our
            motorcycles. Nova Racing works with two professional riders: Jorel
            Boerboom and Danny DiMattia. We collaborate with these riders from
            the development stage through to the testing of the motorcycle and
            rely on their vast experience to help design the ultimate racing
            machines.
          </p>
        </Col>
      </Row>
      <Row>
        <Col sm="1" />
        <Col className="bg-primary p-5 rider">
          <h1>JOREL BOERBOOM</h1>
          <img src={JorelProfile} alt="" width="100%" />
          <p>
            Jorel started racing mini bikes when he was 8 years old and he
            participated in his first competition when he was 12. As he is only
            22 years old, he has a long racing career ahead and he already
            participated in competitions like the TT Assen Moto3 and BSB Moto3.
            In 2018, he won the BSB Moto2 with RS Racing. Almost every track in
            the Netherlands, Spain, Germany and England and some tracks in
            Italy, South-Africa and Belgium he has seen with his motorcycles. So
            far, he has riden on 15+ motorcycles of 100, 125, 250 (Moto2), 600
            (Moto3) &amp; 1000 cc.
          </p>
        </Col>
        <Col sm="1" />
        <Col className="bg-primary p-5 rider">
          <h1>DANNY DIMATTIA</h1>
          <img src={DannyProfile} alt="" width="100%" />
          <p>
            Danny is 38 years old and has been racing since he finished high
            school, so about 20 years. During his racing career he has
            participated in several competition like the Aprilia RS250
            challenge, ONK 250cc, ONK juniorstock 600cc and sidecar races. He
            raced on basically every track in Europe, and on 7 different
            motorcycles of 250, 600 and 750 cc. Among these were a Yamaha R6 and
            Suzuki 750. Last year, Danny rode on our own NovaBike, which was his
            first ever electric race motorcycle.
          </p>
        </Col>
        <Col sm="1" />
      </Row>
    </Container>
  );
};

export default NovaAbout;
