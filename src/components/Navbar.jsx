import Button from 'react-bootstrap/Button';
import { useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Modal, Alert,Card } from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';
import style from './style.module.css'


function OffcanvasExample() {
  const [show, setShow] = useState(false);
  const [showSignin,setShowSignin]=useState(false);
  const [showSignup,setShowSignup]=useState(false);
  const [message,setMessage]=useState('');
  const [currentUser,setCurrentUser]=useState(null);
  const [signin,setSignin]=useState({email:'',password:''});
  const [signup,setSignup]=useState({name:'',email:'',password:''});
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [location]);
  const admin = { email:'admin@gmail.com', password:'123456', role:'admin' };

  const getUsers = ()=> JSON.parse(localStorage.getItem('users') || '[]');
  const saveUsers = (users)=> localStorage.setItem('users', JSON.stringify(users));

  const handleSignup = (e)=>{
    e.preventDefault();
    const users = getUsers();
    if(users.find(u=>u.email===signup.email)){
      setMessage('Email already exists'); return;
    }
    users.push({...signup, role:'user'});
    saveUsers(users);
    setMessage('Signup successful. Please sign in.');
    setShowSignup(false);
    setShowSignin(true);
    setSignup({name:'',email:'',password:''});
  };

  const handleSignin=(e)=>{
    e.preventDefault();
    if(signin.email===admin.email && signin.password===admin.password){
      setCurrentUser({name:'Admin', role:'admin'});
      setMessage('Welcome Admin');
      setShowSignin(false);
      return;
    }
    const user = getUsers().find(u=>u.email===signin.email && u.password===signin.password);
    if(user){
      setCurrentUser(user);
      setMessage('Welcome '+user.name);
      setShowSignin(false);
    } else {
      setMessage('Invalid credentials');
    }
  };

  const logout=()=>{
     setCurrentUser(null);
     setMessage('Logged out');};
  return (
    <>
      <Navbar expand="lg" className={`navbar-dark bg-body-tertiary mb-3 ${style.navbar}`}>
      <Container >
        <Navbar.Brand href="#" className='d-flex w-25'>
          <img width="80px" src="https://res.cloudinary.com/do0eee789/image/upload/v1776883284/output-logo-removebg-preview_keu08l.png" alt="output-logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas show={show} onHide={handleClose} id="offcanvasNavbar" className={style.offcanvasCustom} placement="end" style={{ backgroundColor: '#011029',color: '#f0f2f1' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto m-auto">
              <Nav.Link as={NavLink } to="/">Home</Nav.Link>
              <Nav.Link as={NavLink } to="/about">About</Nav.Link>
              <Nav.Link as={NavLink } to="/services">Services</Nav.Link>
              <Nav.Link as={NavLink } to="/contact">Contact</Nav.Link>
            </Nav>
              {!currentUser ? <div className='d-flex gap-2 mt-3 mt-lg-0'>
              <Button className={style.secondaryBtn}  onClick={()=>setShowSignin(true)}>Sign In</Button>
              <Button className={style.secondaryBtn}  onClick={()=>setShowSignup(true)}>Sign Up</Button>
              
            </div> : <div className='mt-3'>
              <div className='mb-2'>Hello, {currentUser.name} ({currentUser.role})</div>
              <Button className={style.primaryBtn} variant='danger' onClick={logout}>Logout</Button>
            </div>}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
      {/* <Container className={`py-4 position-fixed ${style.dashboardMessage}`}>
        {message && (
          <div className='d-flex justify-content-center position-fixed top-0 start-50 translate-middle-x mt-3 w-100 px-3' style={{ zIndex: 1055 }}>
            <Alert variant='info' className='border-0 shadow rounded-pill px-4 py-2 text-center'>
              {message}
            </Alert>
          </div>
        )}

        <Card className='bg-secondary text-light border-0 shadow-lg rounded-4 p-4'>
          <h2 className='fw-bold mb-3'>Dashboard</h2>
          {!currentUser && <p>Please sign in to continue.</p>}
          {currentUser?.role === 'admin' && <p>Welcome to the Admin Dashboard.</p>}
          {currentUser?.role === 'user' && <p>Welcome to your User Home Page.</p>}
        </Card>
      </Container> */}

      <Modal show={showSignin} onHide={() => setShowSignin(false)} centered>
        <Modal.Body className={`p-4 rounded-2 ${style.formModal}`}>
          <h3 className='fw-bold mb-4 text-center'>Welcome Back</h3>
          <Form onSubmit={handleSignin}>
            <Form.Control className='mb-3 rounded-2 py-2' placeholder='Email' value={signin.email} onChange={(e) => setSignin({ ...signin, email: e.target.value })} />
            <Form.Control className='mb-3 rounded-2 py-2' type='password' placeholder='Password' value={signin.password} onChange={(e) => setSignin({ ...signin, password: e.target.value })} />
            <Button type='submit' className={`m-auto  w-100 ${style.secondaryBtn}`}>Login</Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showSignup} onHide={() => setShowSignup(false)} centered>
        <Modal.Body className={`p-4 rounded-2 ${style.formModal}`}>
          <h3 className='fw-bold mb-4 text-center'>Create Account</h3>
          <Form onSubmit={handleSignup}>
            <Form.Control className='mb-3 rounded-2 py-2' placeholder='Name' value={signup.name} onChange={(e) => setSignup({ ...signup, name: e.target.value })} />
            <Form.Control className='mb-3 rounded-2 py-2' placeholder='Email' value={signup.email} onChange={(e) => setSignup({ ...signup, email: e.target.value })} />
            <Form.Control className='mb-3 rounded-2 py-2' type='password' placeholder='Password' value={signup.password} onChange={(e) => setSignup({ ...signup, password: e.target.value })} />
            <Button type='submit'  className={`m-auto w-100  ${style.secondaryBtn}`}>Create Account</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default OffcanvasExample;