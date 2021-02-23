import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HistoryImg from "../../resources/DSC00585.jpg";
import "./NovaAbout.css";

const NovaAboutHistory = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="history-img">
          <img src={HistoryImg} alt="" width="100%" />
        </Col>
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
      </Row>
    </Container>
  );
};

export default NovaAboutHistory;
