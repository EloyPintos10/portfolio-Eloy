import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCodeSlash } from "react-icons/bs";
import "../css/menu.css"

const Menu = ()=> {
    return (
      <div>
         <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><span className='icons-logo'><BsCodeSlash /></span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-change'>
          <Nav className="justify-content-around">
            <Nav.Link href="#info">About</Nav.Link>
            <Nav.Link href="#practicas">Prácticas Profesionales</Nav.Link>
            <Nav.Link href="#trabajos">Trabajos Realizados</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
  }
  
  export default Menu;
