import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";

function AllBooksList() {
    const navigate = useNavigate();
    const [post, setPost] = useState({
        title: "",
        category: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    };

    const handleClick = (event) => {
        event.preventDefault();

        axios.post("/create",post)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        navigate("Posts")

   }
    return (

        <div className="p-3 bg-secondary text-white mt-3 "


            style={{ width: '40%', margin: 'auto auto ', textAlign: 'center', borderRadius: '10px' }} >
            <h2>Choose Here</h2>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        value={post.title}
                        placeholder="Title"
                        style={{ marginBottom: '1rem' }}
                        onChange={handleChange}
                    />
                    <Form.Control
                        name="category"
                        value={post.category}
                        placeholder="Category"
                        style={{ marginBottom: '1rem' }}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button style={{ width: "50%", marginBottom: "1rem" }}
                    variant="outline-success"
                    onClick={handleClick}>Reserve</Button>
            </Form>
            <Button
                style={{ width: '50%' }}
                variant="outline-dark"
                onClick={() => navigate(-2)} >BACK</Button>
        </div>


    )
};

export default AllBooksList;