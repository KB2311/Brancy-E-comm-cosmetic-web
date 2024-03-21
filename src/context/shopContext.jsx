/* eslint-disable react/prop-types */
/* eslint-disable no-restricted-syntax */
import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

const ShopContext = createContext();

export function ShopContextProvider({ children }) {
  const [Products, setProducts] = useState([]);
  const [Cart, setCart] = useState([]);
  const FetchProduct = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/Products');
      const json = await res.json();
      setProducts(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const LoadCart = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3000/CartItems');
      const json = await res.json();
      setCart(json);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const AddCart = useCallback(async item => {
    try {
      const res1 = await fetch('http://localhost:3000/CartItems');
      const json1 = await res1.json();
      setCart(json1);

      const match = json1.find(x => x.id === item.id);

      if (match) {
        const res = await fetch(`http://localhost:3000/CartItems/${match.id}`, {
          method: 'PUT',
          body: JSON.stringify({
            ...item,
            Quantity: match.Quantity + 1,
            TotalPrice: match.price * (match.Quantity + 1),
          }),
        });
        const json = await res.json();
        setCart(val => [...val, json]);
      } else {
        const res = await fetch('http://localhost:3000/CartItems', {
          method: 'POST',
          body: JSON.stringify({
            ...item,
            Quantity: 1,
            TotalPrice: item.price,
          }),
        });
        const json = await res.json();
        setCart(val => [...val, json]);
      }
      LoadCart();
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const UpdateCart = useCallback(async item => {
    const res = await fetch(`http://localhost:3000/CartItems/${item.id}`, {
      method: 'PUT',
      body: JSON.stringify(item),
    });
    const json = await res.json();
    setCart(val => [...val, json]);
    LoadCart();
  }, []);

  const RemoveCartItem = useCallback(async item => {
    const res = await fetch(`http://localhost:3000/CartItems/${item.id}`, {
      method: 'DELETE',
      body: JSON.stringify(item),
    });
    const json = await res.json();
    setCart(val => [...val, json]);
    LoadCart();
  }, []);

  useEffect(() => {
    FetchProduct();
    LoadCart();
  }, [FetchProduct, LoadCart]);

  const contextValue = useMemo(
    () => ({
      Products,
      AddCart,
      Cart,
      UpdateCart,
      RemoveCartItem,
    }),
    [Products, AddCart, Cart, UpdateCart, RemoveCartItem],
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContext;
