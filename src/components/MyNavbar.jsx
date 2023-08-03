
import {Navbar, Nav, Form,} from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from './img/open.png'

const MyNavbar = () => (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <img src={Logo}   width={50} height={40}   alt="icon1"  /> 
     
      <Navbar.Brand style={{fontFamily:'initial'}}>LIBRARY</Navbar.Brand> 

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className=" m-auto"> 

     <Link  to ="/History">History Books</Link>
</Nav>
 
<Nav className="mr-auto">
 <Link  to ="/Romanc">Romance Books</Link>
 </Nav>

 <Nav className="mr-auto">
 <Link  to ="/AllBooksList">All  Books</Link>
 </Nav>
 <Nav className="mr-auto">
 <Link  to ="/Home">Home</Link>
 </Nav>

        <Nav> 
        <Form.Control type='text' placeholder= 'Search here'/>  
       
        </Nav>



      </Navbar.Collapse>
    
  </Navbar>

)


export default MyNavbar