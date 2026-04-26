import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";

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
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4}>
            <h6>Contact</h6>
            <p>Email: example@email.com</p>
            <p>Location: Egypt</p>
          </Col>

        </Row>

        <hr className={style.divider} />

        <p className={style.copy}>
          © {new Date().getFullYear()} My App. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;