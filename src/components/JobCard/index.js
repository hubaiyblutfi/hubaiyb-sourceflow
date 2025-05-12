import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './JobCard.css';

const JobCard = ({ colorClass, badge, title, location, salary, description, date, aos, aosDuration, aosDelay }) => (
  <Card
    className={`job-card ${colorClass} p-3 h-100`}
    data-aos={aos}
    data-aos-duration={aosDuration}
    data-aos-delay={aosDelay}
  >
    <Card.Body>
      <span className="badge bg-light text-dark mb-2">{badge}</span>
      <Card.Title className={colorClass === 'job-card-blue' ? 'fw-bold text-light' : 'fw-bold'}>{title}</Card.Title>
      <div className={colorClass === 'job-card-blue' ? 'text-light mb-2 d-flex flex-column align-items-start gap-1' : 'text-muted mb-2 d-flex flex-column align-items-start gap-1'}>
        <span><i className="bi bi-geo-alt"></i> {location}</span>
        <span><i className="bi bi-cash"></i> {salary}</span>
      </div>
      <Card.Text className={colorClass === 'job-card-blue' ? 'text-light' : ''}>
        {description}
      </Card.Text>
      <Button variant="light" className="fw-bold w-100 mt-3">View this job</Button>
      <div className={colorClass === 'job-card-blue' ? 'text-light small mt-2' : 'text-muted small mt-2'}>Posted on {date}</div>
    </Card.Body>
  </Card>
);

export default JobCard; 