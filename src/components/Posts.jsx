

import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function Posts() {
    const [posts, setPosts] = useState()
    const[updatePost, setUpdatedPost]= useState({})
    const navigate = useNavigate();

     const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);




    useEffect(() => {
        axios.get('/posts')
            .then((res) => {
                console.log(res)
                setPosts(res.data)

            })
            .catch((err) => console.log(err))


    }, [])



    const deletePost = (id) => {
        console.log(id)
        axios.delete(`/delete/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        window.location.reload()


    }



    const UpdatePost = (post) => {
      setUpdatedPost(post) 
      
        handleShow();
    }

const handleChange =(e)=>{
     const {name,value} = e.target;

     setUpdatedPost((prev)=>{
      return {
         ...prev,
         [name]:value,


      }
    
    });
}

const  saveUpdatePost =()=>{
    console.log(updatePost)
    axios.put(`/update/${updatePost._id}`, updatePost)
.then((res)=>console.log(res))
.catch((err)=>console.log(err));

 handleClose();
 window.location.reload();

}




    return (

        <div style={{ width: "50%", textAlign: "center", margin: "auto auto", color: "black" }}>
            <h1>Booking</h1>




            <Button style={{
                color: "black",
                width: "50%",
                variant: "outline-dark",
                marginBottom: "1rem"
            }}
                onClick={() => navigate(-1)}>
                <h4>Back</h4>
            </Button>
            <Modal   
            show={show} onHide={handleClose} >
               
             <Modal.Header closeButton>
             <Modal.Title>Update a Post</Modal.Title>
             </Modal.Header>
            <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control
                                style={{

                                    marginBottom: "1rem"
                                }}
                                name="title"
                                placeholder="title"
                              
                                value={updatePost.title ? updatePost.title :""}
                             onChange={handleChange}
                            />
                            <Form.Control
                                name="category"
                                placeholder="category"
                                value={updatePost.category ? updatePost.category :""}
                            onChange={handleChange}
                            />
                        </ Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" >
                        Close
                    </Button>
                    <Button variant="primary"  onClick={saveUpdatePost} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>


            {posts ? (
                <>
                    {posts.map((post) => {

                        return (

                            <div key={post._id}
                                style={{
                                    backgroundColor: "ghostwhite",
                                    border: "solid lightgray 1px",
                                    borderRadius: "8px",
                                    marginBottom: "1rem",
                                    padding: "1rem"
                                }}>



                                <h4>Title-{post.title}</h4>
                                <p>Category-{post.category}</p>
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "space-between"
                                    }}>

                                    <Button

                                        variant="outline-info"
                                        onClick={() => UpdatePost(post)}
                                        //onClick={()=>Updatepost(post)}
                                        style={{
                                            width: "50%",
                                            marginRight: "1rem",
                                        }}>
                                        UPDATE
                                    </Button>



                                    <Button onClick={() => deletePost(post._id)} variant="outline-danger " style={{
                                        width: "50%",
                                        marginRight: "1rem"
                                    }}>
                                        DELETE</Button>




                                </div>


                            </div>

                        )


                    })}
                </>

            ) : (
                ""
            )}


        </div>
    )



};

export default Posts