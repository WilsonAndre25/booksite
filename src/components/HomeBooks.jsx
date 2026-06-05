
import { Container, Row, Col, Card, Nav, Navbar, Button, } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from './img/open.png'
import icon from './img/contact-us-symbols_chat.webp'
import books from '../hdata/fantasyBooks.json'
import { useAuth } from "./AuthCriterion";
import { Search, Book, PersonWorkspace } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCart } from "./CartContext";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/navigation";



   function HomeBooks() {
   const { user } = useAuth();
   const { addToCart } = useCart();
   const [showToast, setShowToast] = useState(false);
   const getBookStatus = (book) => {

    if (book.price < 10) return "read";
    if (book.price < 20) return "borrow";
    return "none";
  };
  return (
    <Container>
      <div className="Open">
        <h4 className="mb-4">Welcome to Open Library</h4>
      </div>

      <Row>
        {books.map((book) => {
          const status = getBookStatus(book);

          return (
            <Col xs={3} className="mt-4 d-flex" key={book.asin}>
              <Card style={{ width: "100%", display: "flex", flexDirection: "column", borderRadius: "10px" }}>
                <Card.Img variant="top" src={book.img}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <Card.Body
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Title style={{ color: "black" }}>
                    {book.title}
                  </Card.Title>
                  <Card.Text>
                    <div>Category: {book.category}</div>
                    <div>Price: {book.price}€</div>
                  </Card.Text>

                  {status === "read" && (
                    <Button variant="success" style={{ width: "100%" }}>
                      Read
                    </Button>
                  )}

                  {status === "borrow" && (
                    <Button variant="warning" style={{ width: "100%" }}>
                      borrow
                    </Button>
                  )}

                  {status === "none" && (
                    <Button variant="secondary" disabled style={{ width: "100%" }}>
                      checked out
                    </Button>
                  )}
                  <Button variant="danger"
                    onClick={() => {
                      addToCart(book);
                      toast.success("Book added to cart!", {
                        autoClose: 2000
                      });
                    }} >
                    Add to <FontAwesomeIcon icon={faCartArrowDown} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <ToastContainer position="top-right"/>
    </Container>
  );
}
export default HomeBooks 