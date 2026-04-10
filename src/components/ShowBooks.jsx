
import React, {useState, useEffect} from "react";
import {  useSearchParams } from "react-router-dom";
import { Card,Row, Container,Col } from "react-bootstrap";


function ShowBooks () {


  const [books, setBooks] = useState([]);
   const [SearchParams] =useSearchParams()

   const query= SearchParams.get("q")

   useEffect(() => {
  if (!query) return;

  const fetchBooks = async () => {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );
    const data = await response.json();
    setBooks(data.docs);
  };

  fetchBooks();
}, [query]);

    return(
   
    <Container style={{ marginTop: "30px" }}>

      <h2 style={{ marginBottom: "25px" }}>
        Results for: <b>{query}</b>
      </h2>

      <Row>

        {books.slice(0, 30).map((book, index) => {

          const coverId = book.cover_i;

          const coverUrl = coverId
            ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover";

          return (

            <Col key={index} md={3} lg={2} style={{ marginBottom: "20px" }}>

              <Card style={{ height: "100%" }}>

                <Card.Img
                  variant="top"
                  src={coverUrl}
                  style={{ height: "220px", objectFit: "cover" }}
                />

                <Card.Body>

                  <Card.Title style={{ fontSize: "14px" }}>
                    {book.title}
                  </Card.Title>

                  <Card.Text style={{ fontSize: "12px", color: "gray" }}>
                    {book.author_name?.[0] || "Unknown author"}
                  </Card.Text>

                </Card.Body>

              </Card>

            </Col>

          );

        })}

      </Row>

    </Container>

)}
    

    



export default ShowBooks