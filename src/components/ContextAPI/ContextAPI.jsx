import React, { createContext, useState } from 'react';

export const itemsContext = createContext([])

const ContextAPI = ({children}) => {
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([]);
    const product = {
        cart,
        wishlist,
        setCart,
        setWishlist,
    }
    return(
        <itemsContext.Provider value={product}>
            {
                children
            }
        </itemsContext.Provider>
    )
};


export default ContextAPI;