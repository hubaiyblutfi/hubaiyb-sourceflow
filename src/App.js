import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Hero from './components/Hero';
import JobCard from './components/JobCard';
import Clients from './components/Clients';
import Footer from './components/Footer';
import { heroData } from './constants/hero';
import { jobsData } from './constants/jobs';
import { clientsLogos } from './constants/clients';
import AppNavbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Hero data={heroData} />
      <Clients logos={clientsLogos} />
      <section className="py-5 latest-jobs-section">
        <Container>
          <h2 className="text-center fw-bold mb-5">Latest Jobs</h2>
          <Row className="justify-content-center">
            {jobsData.map((job, idx) => (
              <Col md={4} className="mb-4" key={idx}>
                <JobCard {...job} />
              </Col>
            ))}
          </Row>
          <div className="text-end mt-3">
            <a href="#" className="text-primary fw-bold">View more jobs</a>
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
