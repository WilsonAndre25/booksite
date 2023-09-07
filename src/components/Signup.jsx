
import { useState } from "react";
import { Button, Form, Row, Col,} from "react-bootstrap"
import{Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {

  const [name, setName] = useState()
  const [email,setEmail] = useState()
  const [password, setPassword] = useState()
   
  const navigate = useNavigate()
  

  const handleSubmit =(e)=>{
    e.preventDefault()
       axios.post('/register',{name, email,password})
       .then(result=>{console.log(result)
        navigate('/Login1')
       })
       .catch(err=>console.log(err))
      

  }
  
             

  return (


    <div className="p-3 bg-secondary text-white mt-3 "
      style={{ width: '25%', margin: 'auto auto ', textAlign: 'center', borderRadius: '10px' }} >
      <Form  onSubmit={handleSubmit}>

        <h3> Register </h3>

        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Name"
            placeholder="Enter Name"
            style={{ marginBottom: '1rem' }}
          
               onChange={(e)=>setName(e.target.value)}
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>

        </Form.Group>

        <Form.Group controlId="formBasicEmail">

          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{ marginBottom: '1rem' }} 
          
            onChange={(e)=>setEmail(e.target.value)}
            />
          <Form.Text className="text-muted">

          </Form.Text>

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{ marginBottom: '1rem' }}
        
            onChange={(e)=>setPassword(e.target.value)}

          />

</Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" 
        type="submit" 
        style={{ marginBottom: '1rem' }} >

          Register

        </Button>
        <Row className="py-3">
             <Col>
                   Already have an account? <Link to= '/Login1'>Login</Link> 
             </Col>
        </Row>
      </Form>

    </div>
  )

}
export default Signup 
