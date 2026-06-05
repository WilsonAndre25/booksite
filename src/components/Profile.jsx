
import { Container, Button, Form } from "react-bootstrap";
import { useAuth } from "./AuthCriterion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import api from "../api/api";
import { faUser } from "@fortawesome/free-solid-svg-icons";




const Profile = () => {

    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [form, setForm] = useState({
        name: user?.name || "",
        email: user?.email || "",
        address: user?.address || "",
        pais: user?.pais || ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSave = async () => {
        try {
            const res = await api.put(`/user/update/${user.id}`, form, form);

            console.log("Atualizado:", res.data);
            setEditMode(false);
        }
        catch (err) {
            console.error(err);
            alert("Erro ao atualizar dados");
        }
    };


    useEffect(() => {

        const fetchOrders = async () => {

            try {

                const res = await api.get(`/orders/${user.id}`);
                console.log(res.data);
                setOrders(res.data);

            } catch (err) {
                console.error(err);

            }

        };

        if (user?.id) {
            fetchOrders();
        }

    }, [user]);




    const handleDelete = async (orderId) => {

        try {

            await api.delete(
                `/orders/${orderId}`
            );

            setOrders(
                prev =>
                    prev.filter(
                        order => order._id !== orderId
                    )
            );

        }

        catch (error) {

            console.log(error);

        }

    };


    return (
        <Container className="mt-4">

            {!editMode ? (
                <>
                    <h2 className="detal-count">Account Details </h2>
                    <div className="detalhesConta">
                        <div className="EditInfo">
                            <h6> <FontAwesomeIcon icon={faUser} />{form.name} </h6>
                            <p><strong>Email:</strong> {form.email}</p>
                            <p><strong>Adress:</strong> {form.address}</p>
                            <p><strong>Country:</strong> {form.pais || ""}</p>
                            <div className="button-group">
                                <Button variant="primary"
                                    onClick={() => setEditMode(true)}>
                                    Edit information
                                </Button>
                                <Button variant="outline-danger"
                                    onClick={() => setShowModal(true)}>
                                    Logout
                                </Button>
                            </div>
                        </div>
                      

                    </div>


                    <div className="Title encomendas">Order History</div> 
                    <div className="encomendas">
                     
                            {orders.length === 0 ? (

                                <p>You haven't placed any orders yet.</p>

                            ) : (
                                orders.map((order) => (

                                    order.products.map((product, index) => (

                                        <div
                                            key={`${order._id}-${index}`}
                                            className="order-card"
                                        >

                                            <img
                                                src={product.image}
                                                alt={product.title}
                                            />

                                            <div className="order-info">

                                                <h6>{product.title}</h6>

                                                <p>
                                                    Price: {product.price}€
                                                </p>

                                                <p>
                                                    Quantity: {product.quantity}
                                                </p>

                                                <Button
                                                    variant="outline-danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        handleDelete(order._id)
                                                    }
                                                >
                                                    Delete
                                                </Button>

                                            </div>

                                        </div>
                                    ))
                                ))
                            )}
                        </div>
                      </>








             


               





            ) : (
                <>
                    <h2 className="detal-count"> Edit account</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Morada</Form.Label>
                            <Form.Control
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>País</Form.Label>
                            <Form.Select
                                name="pais"
                                value={form.pais}
                                onChange={handleChange}
                            >
                                <option value="">-- Select country --</option>

                                <option value="Portugal">Portugal</option>
                                <option value="Brasil">Brasíl</option>
                                <option value="Dinamarca">Dinamarca</option>
                                <option value="Cabo Verde">Cabo Verde</option>
                                <option value="França">França</option>
                                <option value="Angola">Angola</option>
                                <option value="England">England</option>
                                <option value="Turquia">Turquia</option>
                                <option value="Zambia">Zambia</option>
                                <option value="United State">United State</option>
                                <option value="Espanha">Espanha</option>
                                <option value="Japão">Japão</option>
                                <option value="Nigéria">Nigéria</option>

                            </Form.Select>
                        </Form.Group>
                        <Button style={{ marginBottom: "30px" }} variant="success" onClick={handleSave}>
                            Save
                        </Button>{" "}
                        <Button style={{ marginBottom: "30px" }} variant="secondary" onClick={() => setEditMode(false)}>
                            Cancel
                        </Button>
                    </Form>






                </>
            )}














            
        </Container>
    );
};
export default Profile;