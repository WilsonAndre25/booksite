import { Container, Row, Col, Carousel } from "react-bootstrap"
import Logo from './img/books-g3770f7222_1280.jpg'



function Home() {
    //state = {
    //selected: null,
    //}

    return (
        <Container >
            <Row >
                <Col className="mt-3">
                <Carousel > 
  <Carousel.Item  interval={1000}>
  
    <div className="container ">
  
    <img 
      className="d-block w-100 rounded"
      src="https://img.freepik.com/fotos-gratis/close-up-abriu-o-livro-na-biblioteca_23-2147845965.jpg?w=740&t=st=1690820233~exp=1690820833~hmac=6158727cdecfd291abf61a763b05337bd286cb09dd902f5c09ca9ec7c018a06f"
      alt="First slide"
     width={300} height={520}/>

      <div className="img1"> What are your friends reading?   </div>
 
   </div>
   
  </Carousel.Item>

  <Carousel.Item interval={500}>

    <div className='container'>
    <img 
      className="d-block w-100 rounded"
      src= "https://img.freepik.com/fotos-gratis/vista-frontal-de-livros-empilhados-e-escadas-para-o-dia-da-educacao_23-2149241046.jpg?w=740&t=st=1690821163~exp=1690821763~hmac=fe1dfd5b21e6676e44c4382f8e885a16e0725f68dbbf42f7d4e2c4a288c668fe"
      alt="Second slide"
      width={300} height={520}/>

      <div  className="img2"> You'll find the best books here !</div>
     
    </div>

    
   
  </Carousel.Item>
  <Carousel.Item>

 <div className=" container">

    <img
      className="d-block w-100 rounded"
      src="https://img.freepik.com/fotos-premium/quadro-negro-com-livro-de-pilha_488220-9873.jpg?w=740"
      alt="Third slide"
      width={300} height={520}/>
       <div className="img3"> Decides what to read next !</div>
    </div>

  </Carousel.Item>
</Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default Home