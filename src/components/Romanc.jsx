
import { Container, Row, Col, Card, } from "react-bootstrap"
import books from '../rdata/romance.json'




function Romanc() {




    return (
        <Container>
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