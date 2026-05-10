import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";
import { FaEnvelope,FaInstagram,FaPhone,FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={`${style.heroSecColor}`}>
        <Row className="gy-4 container m-auto">

          {/* Brand */}
          <Col md={4}>
            <h5 className={style.logo}>My App</h5>
            <p className={style.text}>
              Building modern web experiences with clean design.
            </p>
          </Col>

          {/* Links */}
          <Col md={4}>
            <h6>Links</h6>
            <ul className={style.links}>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4} className="text-left">
            <h6>Contact</h6>
            <p><FaPhone /> +974 50662121</p>
            <p><FaEnvelope /> output.website@outlook.com</p>
            <p><FaLocationArrow /> Doha, Qatar</p>
            <Link style={{ color:"white",fontWeight:"400" }} to="https://www.instagram.com/output.qa/" target='_blank'><FaInstagram /> @output.qa</Link>
          </Col>

        </Row>

        <hr className={style.divider} />

        <p className={style.copy}>
          © {new Date().getFullYear()} OUTPUT Digital Solutions — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;