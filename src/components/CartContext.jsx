import { createContext, useContext, useState } from "react";








const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (book) => {
        setCart((prevCart) => {
            const existingBook = prevCart.find(
                (item) => item.asin === book.asin
            );

            if (existingBook) {
                return prevCart.map((item) =>
                    item.asin === book.asin
                        ? { ...item, quantity: item.quantity + 2 }
                        : item
                );
            }

            return [...prevCart, { ...book, quantity: 1 }];
        });
    };

    const increaseQuantity = (bookKey) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.asin === bookKey
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (asin) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.asin === asin
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (asin) => {
        setCart(cart.filter(item => item.asin !== asin));
    };

    <CartContext.Provider
        value={{
            cart,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity
        }}
    ></CartContext.Provider>

    return (
        <CartContext.Provider
            value={{
                cart, addToCart, removeFromCart, increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);