import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

import Foto1 from "../components/img/music3.jpg"

import Foto2 from "../components/img/biblioteca.jpg"
import Foto3 from "../components/img/Notebook-Clipart-edit-online.png"
import Foto4 from "../components/img/flor1.jpg"
import Foto5 from "../components/img/microscopio-escolar-xsp-116-fb.jpg"
import Foto6 from "../components/img/igreja img.jpg"
import Foto7 from "../components/img/medicina2.jpg"
import Foto8 from "../components/img/nave33.jpg"
import Foto9 from "../components/img/pintura.jpg"
import Foto10 from "../components/img/fantasy1.jpg"

import Foto11 from "../components/img/pandareal.avif"
import Foto12 from "../components/img/plays.jpg"


function SearchCarrousel() {

  const images = [

    { src: Foto1, title: "Music" },
    { src: Foto2, title: "Biographies" },
    { src: Foto3, title: "TexteBooks" },
    { src: Foto4, title: "Romance" },
    { src: Foto5, title: "Science" },
    { src: Foto6, title: "Religion" },
    { src: Foto7, title: "Medicine" },
    { src: Foto8, title: "Fiction " },
    { src: Foto9, title: "Art" },
    { src: Foto10, title: "Fantasy" },
    { src: Foto11, title: "Children" },
    { src: Foto12, title: "Plays" },

  ];


  const slides = [];
  for (let i = 0; i < images.length; i += 6) {
    slides.push(images.slice(i, i + 6));
  }
  return (

    <Container className="LastCarousel">

      <div className="SearchByObj">

        <a href="">Browse by Subject</a>
      </div>


      <Carousel interval={null} className="compact-carousel" indicators={false}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <Row className="g-0 ">
              {slide.map((item, index) => (
                <Col key={index} xs={4} sm={4} md={2}>
                  <Card className="h-100  border-0">
                    <Card.Img
                      src={item.src}
                      style={{ height: "100px", objectFit: "cover" }}
                    />
                    <Card.Body className="p-2">
                      <Card.Text style={{ fontSize: "14px", marginLeft: "45px" }}>
                        {item.title}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}




        
      </Carousel>



      <div className="footCarousel">
        <h5> Around The Library </h5>
        <p> Here's what's happened over the last 28 days. More recent changes.</p>
        <h5>
          About the Project
        </h5>
        <p>
          Open Library is an open, editable library catalog, building towards a web page for every book ever published. More
          Just like Wikipedia, you can contribute new information or corrections to the catalog. You can browse by subjects, authors or lists members have created. If you love books, why not help build a library?
        </p>
      </div>


    </Container>

  );

}
export default SearchCarrousel;