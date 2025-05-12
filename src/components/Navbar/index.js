import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import './Navbar.css';

const AppNavbar = () => (
  <Navbar bg="white" expand="lg" className="shadow-sm py-3 app-navbar">
    <Container>
      <Navbar.Brand className="fw-bold text-primary" href="#home">
        Software Recruitment co.
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar-nav" />
      <Navbar.Collapse id="main-navbar-nav">
        <Nav className="me-auto ms-4">
          <NavDropdown title="For jobseekers" id="jobseekers-dropdown">
            <NavDropdown.Item>Find jobs</NavDropdown.Item>
            <NavDropdown.Item>Upload CV</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="For clients" id="clients-dropdown">
            <NavDropdown.Item>Our services</NavDropdown.Item>
            <NavDropdown.Item>Request staff</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sectors" id="sectors-dropdown">
            <NavDropdown.Item>Software engineering</NavDropdown.Item>
            <NavDropdown.Item>DevOps</NavDropdown.Item>
            <NavDropdown.Item>Cloud</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources" id="resources-dropdown">
            <NavDropdown.Item>Blog</NavDropdown.Item>
            <NavDropdown.Item>Guides</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="d-flex gap-2">
          <Button variant="warning" className="fw-bold px-4">Upload CV</Button>
          <Button variant="outline-danger" className="fw-bold px-4">Contact us</Button>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar; 