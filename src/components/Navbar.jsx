import Button from "react-bootstrap/Button";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Modal from "react-bootstrap/Modal";
import style from "./style.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function OffcanvasExample() {
  const [show, setShow] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const showMessage = (text) => {
  setMessage(text);

  setTimeout(() => {
    setMessage("");
  }, 3000); // disappears after 3 seconds
};
  // ================= SAFE LOAD USER =================
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user || user === "undefined") return;

    try {
      setCurrentUser(JSON.parse(user));
    } catch (err) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }
  }, []);

  // close offcanvas on route change
  useEffect(() => {
    handleClose();
  }, [location]);

  // ================= LOGOUT (FIXED) =================
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setCurrentUser(null);
    showMessage("Logged out successfully");

    setShow(false);
    setShowSignin(false);
    setShowSignup(false);

    navigate("/");
  };

  // ================= SIGNUP =================
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().min(3).required("Name required"),
      email: Yup.string().email().required("Email required"),
      password: Yup.string().min(6).required("Password required"),
    }),

    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/signup`,
          values
        );

        localStorage.setItem("token", res.data.token);

        showMessage(res.data.message);

        resetForm();
        setShowSignup(false);
        setShowSignin(true);
      } catch (err) {
        const data = err.response?.data;

        if (data?.type === "email") {
          setFieldError("email", data.message);
        } else {
          showMessage(data?.message || "Signup failed");
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  // ================= SIGNIN =================
  const signinFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),

    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/api/auth/signin`,
          values
        );

        const { token, user, message } = res.data;

        // IMPORTANT SAFETY CHECK
        if (!user || !token) {
          showMessage("Invalid server response");
          return;
        }

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));

        setCurrentUser(user);
        showMessage(message);

        setShowSignin(false);
      } catch (err) {
        showMessage(err.response?.data?.message || "Login failed");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <>
      {/* ================= NAVBAR (NO DESIGN CHANGE) ================= */}
      <Navbar
        expand="lg"
        className={`navbar-dark bg-body-tertiary mb-3 ${style.navbar}`}
      >
        <Container>
          <Navbar.Brand className="d-flex w-25">
            <img
              width="80px"
              src="https://res.cloudinary.com/do0eee789/image/upload/v1776883284/output-logo-removebg-preview_keu08l.png"
              alt=""
            />
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} />

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            placement="end"
            className={style.offcanvasCustom}
            style={{ backgroundColor: "#011029", color: "#f0f2f1" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="ms-auto m-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
              </Nav>

              {/* ================= AUTH SECTION ================= */}
              {!currentUser ? (
                <div className="d-flex gap-2 mt-3 mt-md-0">
                  <Button
                    className={style.secondaryBtn}
                    onClick={() => setShowSignin(true)}
                  >
                    Sign In
                  </Button>

                  <Button
                    className={style.secondaryBtn}
                    onClick={() => setShowSignup(true)}
                  >
                    Sign Up
                  </Button>
                </div>
              ) : (
                <div className="mt-3">
                  Hello, {currentUser.name}

                  {/* ================= LOGOUT (NOW ALWAYS VISIBLE) ================= */}
                  <Button onClick={logout} className={`mx-3 ${style.secondaryBtn}`}>
                    Logout
                  </Button>
                </div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* ================= SIGNUP MODAL ================= */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Body className={`p-4 ${style.formModal}`}>
          <h3 className="text-center mb-4">Create Account</h3>

          <Form onSubmit={signupFormik.handleSubmit}>
            <Form.Control
              name="name"
              placeholder="Name"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.name}
            />

            <Form.Control
              className="mt-3"
              name="email"
              placeholder="Email"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.email}
            />

            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={signupFormik.handleChange}
              value={signupFormik.values.password}
            />

            <Button type="submit" className={`w-100 mt-4 ${style.secondaryBtn}`}>
              Create Account
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ================= SIGNIN MODAL ================= */}
      <Modal show={showSignin} onHide={() => setShowSignin(false)} centered>
        <Modal.Body className={`p-4 ${style.formModal}`}>
          <h3 className="text-center mb-4">Sign In</h3>

          <Form onSubmit={signinFormik.handleSubmit}>
            <Form.Control
              name="email"
              placeholder="Email"
              onChange={signinFormik.handleChange}
              value={signinFormik.values.email}
            />

            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={signinFormik.handleChange}
              value={signinFormik.values.password}
            />

            <Button type="submit" className={`w-100 mt-4 ${style.secondaryBtn}`}>
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* ================= MESSAGE ================= */}
     {message && (
  <div className={style.messageCard}>
    {message}
  </div>
)}
    </>
  );
}

export default OffcanvasExample;