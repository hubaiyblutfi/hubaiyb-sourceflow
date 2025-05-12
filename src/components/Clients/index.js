import React from 'react';
import { Container } from 'react-bootstrap';
import './Clients.css';

const Clients = ({ logos }) => (
  <section className="py-4 bg-white" >
    <Container className="text-center">
      <div className="text-muted mb-3">Who we work with</div>
      <div className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center gap-4" data-aos="flip-left" data-aos-duration="1500">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.alt} className="client-logo" />
        ))}
      </div>
    </Container>
  </section>
);

export default Clients; 