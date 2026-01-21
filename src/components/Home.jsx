import { Container, Nav, Navbar, NavDropdown, Form, Button } from "react-bootstrap"
import FirstLogo from './img/open-library-logo-png_seeklogo-425670.png'



function Home() {



  return (

    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img src={FirstLogo} style={{ width: 200, height: 200, }} margim alt="logo1" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="mx-auto aling-items-center"
            style={{ gap: "4rem" }}
            navbarScroll
          >
            <Nav.Link href="#action1">My Books</Nav.Link>
           

            <NavDropdown title="Browse" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>




          </Nav>


          <Form className="d-flex">


            <NavDropdown
             title="All" 
             id="navbarScrollingDropdown"
             className="drop-all"
             >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>


            <Form.Control


              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"


            />
            <Button variant="outline-success">Search</Button>
          </Form>




        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}


export default Home