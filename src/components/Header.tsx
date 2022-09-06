import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="nav">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href="/App">Nasa Project</Nav.Link>
            <Nav.Link href="/">About the project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;