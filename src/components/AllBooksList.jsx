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

  const [backendData, setBackendData] = useState([{}])
    const be_url= 'http://localhost:5000/api'
useEffect(() => {

    fetch(`${be_url}`).then(
      response => response.json()

    ).then(
      data => {
        setBackendData(data)
      }
    )

        axios.post("/create",post)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        navigate("Posts")

   }
    return (

        <div className="p-3 bg-secondary text-white mt-3 ">


  </div>
)
}

export default AllBooksList
