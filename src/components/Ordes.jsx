


import { useCart } from "./CartContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthCriterion";

function Ordes() {

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useCart();

    const { user } = useAuth();
   
    console.log( user);  //teste

    const navigate = useNavigate();

   














const handleCheckout = async () => {

    if (!user) {

        alert("Please login first.");
        navigate("/Login1");
        return;
    }

    try {

        const order = {

            userId:user.id,

            products:cart.map(book => ({

                bookId:book.asin,

                title:book.title,

                price:book.price,

                quantity:book.quantity,

                image:book.img

            })),

            amount:cart.reduce(
                (total,item)=>
                    total + item.price * item.quantity,
                0
            )

        };

        console.log(order);

        const response = await fetch(
            "http://localhost:3002/Orders",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(order)
            }
        );

        if(!response.ok){

            throw new Error("Failed to create order");

        }

        const data = await response.json();

        console.log("Order created:", data);

        alert("Order placed successfully!");

    }

    catch(error){

        console.log(error);

        alert("Something went wrong.");

    }

};




    return (

        <div className="cart-container">

            {cart.length === 0 ? (

                <div className="empty-cart">

           <div className="Compras">
             <h4>SHOPPING CART</h4> 
           </div>


                    <h4>
                        There are no items in your cart.
                    </h4>

                    <button
                        className="continue-btn"
                        onClick={() => navigate("/home")}
                    >
                        Continue shopping →
                    </button>

                </div>

            ) : (

                <>

                    <div className="cart-header">

                        <span>PRODUCTS</span>
                        <span>PRICE</span>
                        <span>QUANTITY</span>
                        <span>TOTAL</span>

                    </div>

                    {cart.map((book)=>(

                        <div className="cart-row" key={book.asin}>

                            <div className="product-column">

                                <img
                                    src={book.img}
                                    alt={book.title}
                                    style={{
                                        width:"80px",
                                        height:"120px",
                                        objectFit:"cover"
                                    }}
                                />

                                <p>{book.title}</p>

                            </div>

                            <div className="price-column">

                                {book.price}€

                            </div>

                            <div className="quantity-column">

                                <Button
                                    onClick={()=>
                                        decreaseQuantity(book.asin)
                                    }
                                >
                                    -
                                </Button>

                                <span>{book.quantity}</span>

                                <Button
                                    onClick={()=>
                                        increaseQuantity(book.asin)
                                    }
                                >
                                    +
                                </Button>

                            </div>

                            <div className="total-column">

                                {(book.price * book.quantity).toFixed(2)}€

                            </div>

                            <button
                                className="remove-btn"
                                onClick={()=>
                                    removeFromCart(book.asin)
                                }
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                    <div className="subtotal-box">

                        {
                            cart.reduce(
                                (total,item)=>
                                    total +
                                    (item.price * item.quantity),
                                0
                            ).toFixed(2)
                        }€

                    </div>

                    <div
                        style={{
                            display:"flex",
                            gap:"15px",
                            marginTop:"20px"
                        }}
                    >

                        <button
                            className="continue-btn2"
                            onClick={() => navigate("/home")}
                        >
                            <h6>Continue shopping →</h6>
                        </button>

                        <Button
                            variant="success"
                            onClick={handleCheckout}
                        >
                            Checkout
                        </Button>

                    </div>

                </>

            )}

        </div>
    );
}
export default Ordes;