import { Container, Nav, Navbar, NavDropdown, Card, Row, Col, Carousel } from "react-bootstrap"
import { useEffect,useState } from "react";






function BooksCarousel3 () {
  

 const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=javascript&limit=18")
      .then(res => res.json())
      .then(data => setBooks(data.docs || [])) 
      .catch(err => console.error(err));
  }, []);

  // Função para dividir em grupos de 6
  const chunkBooks = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const bookSlides = chunkBooks(books, 6);

  return (
    <Container className="py-4 px-4 custom-container">

<div className="Browsesearch">
    <a href="">Books We Love</a>
</div>
    


      <Row className="justify-content-center">
        <Col md={10} lg={12}>
          <Carousel interval={null}  indicators={false}>
            {bookSlides.map((slide, index) => (
              <Carousel.Item key={index}>
                <Row className="g-3">
                  {slide.map((book, idx) => (
                    <Col key={idx} xs={6} md={4} lg={2}>
                      <Card className="h-100">
                        <Card.Img
                          variant="top"
                          src={
                            book.cover_i
                              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                              : "https://via.placeholder.com/150?text=Sem+Imagem"
                          }
                          style={{
                            height: "200px",
                            objectFit: "cover",
                          }}
                        />
                        <Card.Body>
                          <Card.Title style={{ fontSize: "0.85rem" }}>
                            {book.title}
                          </Card.Title>
                          <Card.Text style={{ fontSize: "0.75rem" }}>
                            {book.author_name?.[0] || "Autor desconhecido"}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>




</Container>

    );
}
export default BooksCarousel3