import { createContext, useContext, useEffect, useState } from "react";

const CardContext = createContext(null)


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {

      const cartData = localStorage.getItem("cart");
      return cartData ? JSON.parse(cartData) : [];
    });



  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product) => {
      const exists = cart.find((item) => item.id === product.id);
      if (exists) {
        setCart((prev) =>
          prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    };
  
    const removeFromCart = (productId) => {
      setCart((prev) => prev.filter((item) => item.id !== productId));
    };
  
    const getTotalPrice = () => {
      return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
  
    const increaseCart = (productId) => {
      setCart((prev) =>
        prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    };
  
    return (
      <CardContext.Provider
        value={{ cart, setCart, addToCart, removeFromCart, getTotalPrice, increaseCart }}
      >
        {children}
      </CardContext.Provider>
    );
  };
  

export const useCart = () => {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}







// import { createContext, useContext, useEffect, useState } from "react";

// const CardContext = createContext(null)

// export const useCart = () => {
//     const context = useContext(CardContext)
//     if (!context) {
//         throw new Error("useCart must be used within a CartProvider")
//     }
//     return context
// }

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([])
//     const [showNotification, setShowNotification] = useState(false)

//     useEffect(() => {
//         localStorage.setItem("cart", JSON.stringify(cart))
//     }, [cart])

//     const addToCart = (product) => {
//         const exsisitProduct = cart.find((item) => item.id === product.id)
//         if (exsisitProduct) {
//             const newCart = cart.map((item) => {
//                 if (item.id === product.id) {
//                     return {
//                         ...item,
//                         quantity: item.quantity + 1
//                     }
//                 }
//                 return item
//             })
//             setCart(newCart)
//         } else {
//             setCart((prev) => [...prev, { ...product, quantity: 1 }])
//         }

//         // 🔔 Toast notification göstər
//         setShowNotification(true)
//         setTimeout(() => setShowNotification(false), 3000)
//     }

//     const removeFromCart = (productId) => {
//         const newProducts = cart.filter((item) => item.id !== productId)
//         setCart(newProducts)
//     }

//     const clearCart = () => {
//         setCart([])
//     }

//     const getTotalPrice = () => {
//         return cart.reduce((acc, item) => {
//             return acc + item.price * item.quantity
//         }, 0)
//     }

//     const IncreaseCart = (productId) => {
//         const newCart = cart.map((item) => {
//             if (item.id === productId) {
//                 return {
//                     ...item,
//                     quantity: item.quantity + 1
//                 }
//             }
//             return item
//         })
//         setCart(newCart)
//     }

//     return (
//         <CardContext.Provider value={{
//             addToCart, removeFromCart, clearCart, IncreaseCart,
//             getTotalPrice, setCart, cart, showNotification
//         }}>
//             {children}
//         </CardContext.Provider>
//     )
// }

