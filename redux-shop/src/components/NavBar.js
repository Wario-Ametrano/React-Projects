import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../logo.svg';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Assicurati che questo import sia presente

const NavBar = () => {

    const cartProducts = useSelector(state => state.cart);

    return (
      <Navbar expand="lg" className="navbar navbar-dark bg-primary">
      <Container fluid>
        <img
          src={logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          style={{ height: '40px', overflow: 'hidden' }}
        />
        <Navbar.Brand to="/" as={Link} style={{ textDecoration: 'underline' }}>
          Redux Shop
        </Navbar.Brand>
        <Nav>
          <Nav.Link to="/dashboard" as={Link} style={{ color: 'white', marginTop: '5px' }}>
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse>
          {/* 🔍 Form centrato */}
          <Form className="d-flex mx-auto" style={{ width: '60%' }}>
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button style={{backgroundColor:'DarkSeaGreen'}} type="submit">Submit</Button>
          </Form>

          {/* 👤 Profilo e 🛒 Carrello */}
          <Navbar.Text className="ms-auto d-flex align-items-center">
            <Nav className="me-3">
              <i className="bi bi-person-fill text-white me-1" style={{marginTop:"7px"}}></i>
              <Nav.Link to="/profile" as={Link} style={{ color: 'white' }}>
                Profile
              </Nav.Link>
            </Nav>
            <Nav>
              <i className="bi bi-cart text-white me-1" style={{marginTop:"7px"}}></i>
              <Nav.Link to="/cart" as={Link} style={{ color: 'white' }}>
                My Bag: {cartProducts.length}
              </Nav.Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;