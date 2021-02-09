import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../resources/LogoLarge.png";
import "./NovaFooter.css";

const NovaFooter = () => {
  return (
    <Container fluid className="ft-cont py-3">
      <Row>
        <Col>
          <FooterSection
            label="ABOUT US"
            entries={[
              { label: "Mission & Vision", link: "/#" },
              { label: "Motorcycles", link: "/#" },
              { label: "Current Team", link: "/#" },
              { label: "Media", link: "/#" },
            ]}
          />
        </Col>
        <Col>
          <FooterSection
            label="PARTNERS"
            entries={[
              { label: "Sponsors", link: "/#" },
              { label: "Become A Sponsor", link: "/#" },
            ]}
          />
        </Col>
        <Col sm={2} className="my-auto">
          <img className="ft-logo" src={logo} alt="" />
        </Col>
        <Col className="d-flex justify-content-end text-right">
          <FooterSection
            label="CONTACT"
            entries={[
              { label: "T: +31 (0) 15 278 92 18" },
              { label: "E: info@novaracing.nl" },
              { label: "Privacy Policy", link: "/#" },
            ]}
          />
        </Col>
        <Col className="d-flex justify-content-end text-right">
          <FooterSection
            label="LOCATION"
            entries={[
              { label: "D:DREAM HALL", link: "/#" },
              { label: "Stevinweg 4" },
              { label: "2628 CN Delft" },
              { label: "The Netherlands" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

type FooterSectionProps = {
  label: string;
  entries: {
    label: string;
    link?: string;
  }[];
};

const FooterSection = (props: FooterSectionProps) => {
  return (
    <div className="ft-section">
      <h5>{props.label}</h5>
      {props.entries.map((e) =>
        e.link !== null ? <a href={e.link}>{e.label}</a> : <div>{e.label}</div>
      )}
    </div>
  );
};

export default NovaFooter;
