
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from './img/open.png'
import icon from './img/contact-us-symbols_chat.webp'




function MyNavbar() {


  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      <img src={Logo} width={50} height={40} alt="icon1" />

      <Navbar.Brand style={{ fontFamily: 'initial' }}>LIBRARY</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav className=" m-auto">
          <Link to="/History">History Books</Link>
        </Nav>

        <Nav className="mr-auto">
          <Link to="/AllBooksList">Book Here</Link>
        </Nav>
        <Nav className="mr-auto">
          <Link to="/Home">Home</Link>
        </Nav>

        <Nav className="mr-auto">
            <img src={icon} width={30} height={30} alt="icon1" />
            
          <Link to="/Signup ">Login</Link>
        

        </Nav>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default MyNavbar
