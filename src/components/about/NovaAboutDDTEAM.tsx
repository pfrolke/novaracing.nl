import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryImg from "../../resources/DSC00585.jpg";
import "./NovaAboutDDTEAM.css";

const NovaAboutDDTEAM = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="history-txt p-5">
          <h1>HISTORY</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolores consequuntur fugiat placeat? Ducimus, officia. Atque iste
            temporibus perferendis, ratione consequatur mollitia commodi
            deleniti, vel reprehenderit asperiores labore, eum sint. Harum
            dolores consequuntur fugiat placeat? Ducimus, officia. Atque iste
            temporibus perferendis, ratione consequatur mollitia commodi
            deleniti, vel reprehenderit asperiores labore, eum sint. Harum
            dolores consequuntur fugiat placeat? Ducimus, officia. Atque iste
            temporibus perferendis, ratione consequatur mollitia commodi
            deleniti, vel reprehenderit asperiores labore, eum sint.
          </p>
        </Col>
        <Col className="history-img">
          <img src={HistoryImg} alt="" width="100%" />
        </Col>
      </Row>
    </Container>
  );
};

export default NovaAboutDDTEAM;
