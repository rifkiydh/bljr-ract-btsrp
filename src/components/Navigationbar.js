import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>rifkimovie</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">trending</Nav.Link>
            <Nav.Link href="#superhero">superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
