

import { Navbar, Nav, NavDropdown, Form, Button, Container, InputGroup, ListGroup } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstLogo from './img/new labary.png'

function MyNavbar() {

  const [inputValue, setInputValue] = useState("")
  const [suggestions, setSuggestions] = useState([])

  const navigate = useNavigate();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const searchBooks = () => {
    if (!inputValue) return;
    navigate(`/search?q=${inputValue}`)
    setSuggestions([])
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBooks();
    }
  };


  useEffect(() => {

    if (inputValue.length < 3) {
      setSuggestions([])
      return
    }

    const fetchSuggestions = async () => {

      try {

        const response = await fetch(
          `https://openlibrary.org/search.json?q=${inputValue}&limit=5`
        )

        const data = await response.json()

        setSuggestions(data.docs)

      } catch (error) {
        console.log(error)

      }

    }

    fetchSuggestions()

  }, [inputValue])

  return (

    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>

        <img src={FirstLogo} style={{ width: 125, height: 90, marginLeft: 75 }} alt="logo1" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto align-items-center"
            style={{ gap: "5.5rem" }}
            navbarScroll
          >

            <Nav.Link href="#action1">My Books</Nav.Link>

            <NavDropdown title="Browse" id="navbarScrollingDropdown">

              <NavDropdown.Item href="#subjects">Subjects</NavDropdown.Item>
              <NavDropdown.Item href="#random">Random Book</NavDropdown.Item>
              <NavDropdown.Item href="#advanced">Advanced Search</NavDropdown.Item>

            </NavDropdown>

            <Form className="d-flex position-relative">

              <NavDropdown
                title="All"
                id="navbarScrollingDropdown"
                className="drop-all"
              >

                <NavDropdown.Item>Title</NavDropdown.Item>
                <NavDropdown.Item>Author</NavDropdown.Item>
                <NavDropdown.Item>Text</NavDropdown.Item>
                <NavDropdown.Item>Subject</NavDropdown.Item>

              </NavDropdown>

              <InputGroup>

                <Form.Control
                  value={inputValue}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  type="search"
                  placeholder="Search books..."
                  aria-label="Search"
                />

                <Button variant="outline-secondary" onClick={searchBooks}>
                  🔍
                </Button>

              </InputGroup>

              {suggestions.length > 0 && (

                <ListGroup
                  className="position-absolute w-100"
                  style={{ top: "45px", zIndex: 1000 }}
                >

                  {suggestions.map((book, index) => (

                    <ListGroup.Item
                      key={index}
                      action

                      onClick={() => {
                        navigate(`/search?q=${encodeURIComponent(book.title)}`);
                        setSuggestions([]);
                      }}


                    >

                      {book.title}
                      {book.author_name && ` - ${book.author_name[0]}`}

                    </ListGroup.Item>

                  ))}

                </ListGroup>

              )}

            </Form>

            <Button variant='outline-primary'>Login</Button>
            <Button variant='primary'>Sign Up</Button>

          </Nav>

        </Navbar.Collapse>

      </Container>

    </Navbar>

  );
}
export default MyNavbar
















