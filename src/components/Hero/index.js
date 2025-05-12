import React from 'react';
import { Container, Row, Col, Button, InputGroup, Form } from 'react-bootstrap';
import './Hero.css';

const Hero = ({ data }) => (
  <section className="hero-section-custom position-relative overflow-hidden" data-aos="fade-down" data-aos-duration="1000">
    <Container className="py-5 d-flex flex-column justify-content-center" style={{ minHeight: '93vh' }}>
      <Row className="align-items-center">
        <Col md={6} className="text-md-start text-center mb-4 mb-md-0">
          <div className="mb-2 text-light">{data.subheadline}</div>
          <h1 className="display-4 fw-bold text-light mb-4">{data.headline}</h1>
          <InputGroup className="mb-3 hero-search">
            <Form.Control placeholder={data.searchPlaceholder} />
            <Button variant="warning" className="fw-bold px-4">Search jobs</Button>
          </InputGroup>
        </Col>
        <Col md={6} className="text-center">
          <img src={data.image} alt="hero" className="img-fluid rounded-4 hero-img" style={{maxWidth: '340px'}} />
        </Col>
      </Row>
    </Container>
    <div className="hero-shape hero-shape-1" data-aos="fade-right" data-aos-duration="2200"></div>
    <div className="hero-shape hero-shape-2" data-aos="fade-left" data-aos-duration="2200"></div>
  </section>
);

export default Hero; 