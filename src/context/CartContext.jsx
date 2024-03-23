/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [Cart, setCart] = useState([]);

  const LoadCart = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/CartItems');
      const json = await res.json();
      setCart(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    LoadCart();
  }, [LoadCart]);

  const contextValue = useMemo(
    () => ({
      Cart,
    }),
    [Cart],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
