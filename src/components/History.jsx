import { Container, Row, Col, Card} from "react-bootstrap"
import pastas from '../hdata/fantasyBooks.json'
import { Component } from "react"



class History extends Component {
    //state = {
    //selectedPasta: null,
    //}
    render() {

        return (
            <Container>

                <Row>
                    {pastas.map((pasta) => {
                        return (

                            <Col xs={3} className="mt-4" key={pasta.asin}>

                                <>
                                    <Card  >
                                        <Card.Img variant="top" src={pasta.img} />
                                        <Card.Body>
                                            <Card.Title style={{ color: 'black' }}>
                                                {pasta.title}
                                            </Card.Title>
                                            <Card.Text style={{ border: '2px solid black ' }} >
                                                <li>Category-{pasta.category}</li>
                                                <li>Price-{pasta.price}€</li>
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
}


export default History;