import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import './Footer.css';

const footerSections = [
  {
    title: "Explore",
    items: [
      "Homepage",
      "For jobseekers",
      "For clients",
      "Our sectors",
      "Resources",
      "Contact us"
    ]
  },
  {
    title: "Sectors",
    items: [
      "Software engineering",
      "DevOps",
      "Cloud",
      "Infrastructure",
      "Testing",
      "Security"
    ]
  },
  {
    title: "Services",
    items: [
      "Nav item",
      "Nav item",
      "Nav item",
      "Nav item"
    ]
  }
];

const Footer = () => (
  <footer className="footer-custom text-light pt-5 pb-3">
    <Container>
      {/* Desktop Footer */}
      <Row className="d-none d-md-flex">
        <Col md={3} className="mb-4 mb-md-0">
          <div className="fw-bold mb-2">Software Recruitment co.</div>
          <div className="mb-3">
            <a href="#" className="footer-social me-2"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="footer-social me-2"><i className="bi bi-facebook"></i></a>
            <a href="#" className="footer-social me-2"><i className="bi bi-instagram"></i></a>
            <a href="#" className="footer-social"><i className="bi bi-twitter"></i></a>
          </div>
        </Col>
        {footerSections.map((section, idx) => (
          <Col md={3} className="mb-4 mb-md-0" key={section.title}>
            <div className="fw-bold mb-2">{section.title}</div>
            <ul className="list-unstyled">
              {section.items.map((item, i) => (
                <li key={i}><a href="#" className="footer-link">{item}</a></li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
      <div className="d-md-none">
        <div className="fw-bold mb-2">Software Recruitment co.</div>
        <div className="mb-3">
          <a href="#" className="footer-social me-2"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="footer-social me-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="footer-social me-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="footer-social"><i className="bi bi-twitter"></i></a>
        </div>
        <Accordion>
          {footerSections.map((section, idx) => (
            <Accordion.Item eventKey={String(idx)} key={section.title}>
              <Accordion.Header>{section.title}</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled mb-0">
                  {section.items.map((item, i) => (
                    <li key={i}><a href="#" className="footer-link">{item}</a></li>
                  ))}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </Container>
  </footer>
);

export default Footer; 