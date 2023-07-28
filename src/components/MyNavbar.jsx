
import {Navbar, Nav, Form} from "react-bootstrap"
import { Link } from "react-router-dom"



const MyNavbar = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
      <Navbar.Brand>Online Libary</Navbar.Brand> 

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className=" m-auto"> 

     <Link  to ="/History">HISTORY BOOKS</Link>
</Nav>
 
<Nav className="mr-auto">
 <Link  to ="/Romanc">ROMANCE BOOKS</Link>
 </Nav>

 <Nav className="mr-auto">
 <Link  to ="/AllBooksList">All  BOOKS</Link>
 </Nav>

        <Nav> 
        <Form.Control type='text' placeholder= 'Search here'/>  
       
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>

)


export default MyNavbar