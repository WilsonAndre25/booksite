import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

function AllBooksList() {

  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    category: ""

  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      }

    })
  }

  const handleClick = (event) => {

    axios.post("/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    navigate("posts")

  }

  return (
    <div style={{ width: "30%", textAlign: "center", margin: "auto auto", color: "black", variant: "second" }}  >
      <h1>Choose here</h1>
      <Form>
        <Form.Group>

          <Form.Control
            name="title"
            placeholder="title"

            onChange={handleChange}
          />


          <Form.Control
            name="category"
            placeholder="category"
            style={{ marginTop: "1rem" }}
            onChange={handleChange}
          />

        </Form.Group>

        <Button

          style={{
            width: "50%",
            textAlign: "center",
            margin: "auto auto",
            color: "black",
            marginTop: "1rem"
          }}
          variant="outline-success"
          onClick={handleClick}
        >
          reserve

        </Button>
      </Form>

      <Button
        style={{
          width: "50%",
          textAlign: "center",
          margin: "auto auto",
          color: "black",
          marginTop: "1rem"
        }}
        onClick={() => navigate(-1)}
      >back</Button>





















    </div>

  )








}

export default AllBooksList