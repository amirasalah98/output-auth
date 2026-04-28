import Button from "react-bootstrap/Button";
import { useLocation, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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

  const location = useLocation();

  const admin = {
    email: "admin@gmail.com",
    password: "123456",
    role: "admin",
    name: "Admin",
  };

  const getUsers = () =>
    JSON.parse(localStorage.getItem("users")) || [];

  const saveUsers = (users) =>
    localStorage.setItem("users", JSON.stringify(users));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [location]);

  // SIGNUP FORMIK
  const signupFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Minimum 3 characters")
        .required("Name required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Email required"),

      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Password required"),
    }),

    onSubmit: (values) => {
      const users = getUsers();

      if (users.find((u) => u.email === values.email)) {
        setMessage("Email already exists");
        return;
      }

      users.push({ ...values, role: "user" });
      saveUsers(users);

      setMessage("Signup successful");
      setShowSignup(false);
      setShowSignin(true);
      signupFormik.resetForm();
    },
  });

  // SIGNIN FORMIK
  const signinFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Email required"),

      password: Yup.string().required("Password required"),
    }),

    onSubmit: (values) => {
      if (
        values.email === admin.email &&
        values.password === admin.password
      ) {
        setCurrentUser(admin);
        setMessage("Welcome Admin");
        setShowSignin(false);
        return;
      }

      const user = getUsers().find(
        (u) =>
          u.email === values.email &&
          u.password === values.password
      );

      if (user) {
        setCurrentUser(user);
        setMessage("Welcome " + user.name);
        setShowSignin(false);
      } else {
        setMessage("Invalid credentials");
      }
    },
  });

  const logout = () => {
    setCurrentUser(null);
    setMessage("Logged out");
  };

  return (
    <>
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
            style={{ backgroundColor: '#011029',color: '#f0f2f1'}}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="ms-auto m-auto">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>

                <Nav.Link as={NavLink} to="/about">
                  About
                </Nav.Link>

                <Nav.Link as={NavLink} to="/services">
                  Services
                </Nav.Link>

                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>

              {!currentUser ? (
                <div className="d-flex gap-2 mt-3">
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
                <div>
                  Hello {currentUser.name}
                  <Button
                    onClick={logout}
                    className="ms-2"
                  >
                    Logout
                  </Button>
                </div>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* SIGNUP MODAL */}
      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Body className={`p-4 ${style.formModal}`}>
          <h3 className="text-center mb-4">Create Account</h3>

          <Form onSubmit={signupFormik.handleSubmit}>
            <Form.Control
              name="name"
              placeholder="Name"
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.name}
            />
            <b className="text-danger">
              {signupFormik.touched.name &&
                signupFormik.errors.name}
            </b>

            <Form.Control
              className="mt-3"
              name="email"
              placeholder="Email"
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.email}
            />
            <b className="text-danger">
              {signupFormik.touched.email &&
                signupFormik.errors.email}
            </b>

            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={signupFormik.handleChange}
              onBlur={signupFormik.handleBlur}
              value={signupFormik.values.password}
            />
            <b className="text-danger">
              {signupFormik.touched.password &&
                signupFormik.errors.password}
            </b>

            <Button
              type="submit"
              className={`w-100 mt-3 ${style.secondaryBtn}`}
            >
              Create Account
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* SIGNIN MODAL */}
      <Modal show={showSignin} onHide={() => setShowSignin(false)} centered>
        <Modal.Body className={`p-4 ${style.formModal}`}>
          <h3 className="text-center mb-4">Welcome Back</h3>

          <Form onSubmit={signinFormik.handleSubmit}>
            <Form.Control
              name="email"
              placeholder="Email"
              onChange={signinFormik.handleChange}
              onBlur={signinFormik.handleBlur}
              value={signinFormik.values.email}
            />
            <b className="text-danger">
              {signinFormik.touched.email &&
                signinFormik.errors.email}
            </b>

            <Form.Control
              className="mt-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={signinFormik.handleChange}
              onBlur={signinFormik.handleBlur}
              value={signinFormik.values.password}
            />
            <b className="text-danger">
              {signinFormik.touched.password &&
                signinFormik.errors.password}
            </b>

            <Button
              type="submit"
              className={`w-100 mt-3 ${style.secondaryBtn}`}
            >
              Login
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OffcanvasExample;