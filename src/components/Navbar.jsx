import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink  } from 'react-router-dom';
import style from './style.module.css'


function OffcanvasExample() {
  return (
    <>
      <Navbar expand="lg" className={`navbar-dark bg-body-tertiary mb-3 ${style.navbar}`}>
      <Container >
        <Navbar.Brand href="#" className='d-flex w-50'>
          <img width="80px" src="https://res.cloudinary.com/do0eee789/image/upload/v1776883284/output-logo-removebg-preview_keu08l.png" alt="output-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" className={style.offcanvasCustom} placement="end" style={{ backgroundColor: '#000',color: '#f0f2f1' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto m-auto">
              <Nav.Link as={NavLink } to="/">Home</Nav.Link>
              <Nav.Link as={NavLink } to="/about">About</Nav.Link>
              <Nav.Link as={NavLink } to="/services">Services</Nav.Link>
            </Nav>
            <Nav.Link className={`${style.contactBtn}`} as={NavLink } to="/contact">Contact Us</Nav.Link>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
  );
}

export default OffcanvasExample;