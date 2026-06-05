

import { Navbar, Nav, NavDropdown, Form, Button, Container, InputGroup, ListGroup } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstLogo from './img/new labary.png'
import { Link } from "react-router-dom";

import { useAuth } from "./AuthCriterion"
import { Modal } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass, faRightToBracket, faXmark, faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
  const [hideLogout, setHideLogout] = useState(false);
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
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




  useEffect(() => {

    const handleScroll = () => {

      console.log(window.scrollY);

      if (window.scrollY > 100) {
        console.log("sconder");
        setHideLogout(true);
      } else {
        console.log("mostrar")
        setHideLogout(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>
      <Navbar expand="lg" className="custom-navbar" fixed="top">
        <Container fluid>

          <img src={FirstLogo} style={{ width: 125, height: 90, marginLeft: 75 }} alt="logo1" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <Nav
              className="mx-auto align-items-center"
              style={{ gap: "5.5rem" }}
              navbarScroll
            >

              <Nav.Link href="/">My Books</Nav.Link>

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

                </NavDropdown>
                <InputGroup className="search-group">

                  <Form.Control
                    className="search-input"
                    value={inputValue}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    type="search"
                    placeholder="Search books..."
                    aria-label="Search"
                  />

                  <Button variant="outline-secondary" onClick={searchBooks}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
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
                        {book.author_name && `- ${book.author_name[0]}`}

                      </ListGroup.Item>

                    ))}

                  </ListGroup>
                )}

              </Form>

              {user ? (
                <>
                  {<span className="user-area" > Welcome (a) <FontAwesomeIcon icon={faUser} onClick={() => navigate("/Profile")} className="icon-user" />
                    <span className="user-name">
                      {user.name}
                    </span>  <FontAwesomeIcon icon={faCartArrowDown} className="icon-cart" onClick={() => navigate("/Ordes")} />  </span>}

                  <Button
                    variant="outline-danger"
                    onClick={() => setShowModal(true)}
                    style={{
                      opacity: hideLogout ? 0 : 1,
                      transition: "0.3s ease",
                      pointerEvents: hideLogout ? "none" : "auto"
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (

                <>
                  <div className="iconLogin">
                    <Link to="/Login1">
                      <FontAwesomeIcon icon={faRightToBracket} />
                    </Link>
                  </div>

                  {/*  <Button as={Link} to="/" variant="outline-primary"> Login </Button> */}

                  <Button className="signupBtn" as={Link} to="/Signup" variant="primary">
                    Sign Up
                  </Button>
                </>
              )}
            </Nav>

          </Navbar.Collapse>

        </Container>

      </Navbar>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header className="d-flex justify-content-between align-items-center" >

          <Modal.Title> End of Session </Modal.Title>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setShowModal(false)}
            className="closeX"
          />

        </Modal.Header>
        <Modal.Body>
          Do you want to log out??
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            No
          </Button>

          <Button
            variant="primary"
            onClick={() => {
              setShowModal(false);
              logout();
              navigate("/");
            }}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}
export default MyNavbar
















