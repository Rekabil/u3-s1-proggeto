import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="align-content-center">
      <Navbar.Brand href="#home" className="m-0">
        <img src={logo} alt="" height={75} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="btn btn-outline-light" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#home">TV Shows</Nav.Link>
          <Nav.Link href="#home">Movies</Nav.Link>
          <Nav.Link href="#home">Recently Added</Nav.Link>
          <Nav.Link href="#home">My List</Nav.Link>
        </Nav>
        <a href="#search">
          <i className="bi bi-search icons"></i>
        </a>
        <a href="#kids" id="kids" className="icons">
          KIDS
        </a>
        <a href="#search">
          <i className="bi bi-bell-fill icons"></i>
        </a>
        <a href="#search">
          <i className="bi bi-person-fill icons"></i>
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
