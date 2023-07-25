import{Navbar,Nav} from "react-bootstrap"
import {Link} from 'react-router-dom'



const MyNavbar = (props)=>(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand>{props.proTitle} </Navbar.Brand>    

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Link to ="/History">History Books</Link>
      <Link to ="/Romanc">Romance books</Link>
      <Link to ="/AllBooksList">All Books</Link>
 
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Sing in</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sing up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

);
export default MyNavbar


