
import { Container, Row, Col, Card, Nav,Navbar  } from "react-bootstrap"
import { Link } from "react-router-dom"
import books from '../rdata/romance.json'
import Logo from './img/open.png'
import icon from './img/contact-us-symbols_chat.webp'


function Romanc() {

    return (


       








        <Container>

<div>

        
                
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
      
    <Link to="/Signup ">Logout</Link>
  

  </Nav>
</Navbar.Collapse>

</Navbar>
</div>





            <div style={{ width: '40%', margin: 'auto auto ', textAlign: 'center', color: 'blue' }} >
                
                
                
                
                
                
                
                
        

                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                <h2>Romance Books</h2>






















            </div>
            <Row>
                {books.map((books) => {
                    return (

                        <Col xs={3} className="mt-4" key={books.asin}>

                            <>
                                <Card >
                                    <Card.Img variant="top" src={books.img} />
                                    <Card.Body>
                                        <Card.Title style={{ color: 'black' }}>
                                            {books.title}
                                        </Card.Title>
                                        <Card.Text style={{ border: '2px solid black ' }} >
                                            <li>Category-{books.category}</li>
                                            <li>Price-{books.price}€</li>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                            </>

                        </Col>
                    )

                })
                }

            </Row>

        </Container >
    );
}






export default Romanc