import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-unresolved
import { toast } from 'sonner';

import {
  ADD_CART,
  DELETE_CART,
  FAIL,
  LOAD_CART,
  REQUEST,
  SUCCESS,
  UPDATE_CART,
} from '../constants/actions';
import crudReducer from '../reducers/crudReducer';
import loadingReducer from '../reducers/loadingReducer';
import errorReducer from '../reducers/errorReducer';

const CartContext = createContext();

const cartInitialState = {
  cart: [],
  loading: [],
  error: [],
};

const cartReducer = (
  state,
  {
    type,
    payload: {
      cartPayload,
      loadingPayload,
      errorPayload,
    },
  },
) => ({
  cart: crudReducer(state.cart, { type, payload: cartPayload }),
  loading: loadingReducer(state.loading, { type, payload: loadingPayload }),
  error: errorReducer(state.error, { type, payload: errorPayload }),
});

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  const inputRef = useRef();

  const loadCart = useCallback(async () => {
    try {
      dispatch({ type: `${LOAD_CART}_${REQUEST}`, payload: {} });
      let url = 'http://localhost:3000/cart';
      const res = await fetch(url);
      const json = await res.json();
      dispatch({
        type: `${LOAD_CART}_${SUCCESS}`,
        payload: {
          cartPayload: json,
        },
      });
    } catch (error) {
      toast('Event has been created.');

      dispatch({
        type: `${LOAD_CART}_${FAIL}`,
        payload: {
          errorPayload: error,
        },
      });
    }
  }, []);

  const addCart = useCallback(async e => {
    try {
      dispatch({ type: `${ADD_CART}_${REQUEST}`, payload: {} });
      e.preventDefault();
      const res = await fetch('http://localhost:3000/cart', {
        method: 'POST',
        body: JSON.stringify({
          isDone: false,
          text: inputRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: `${ADD_CART}_${SUCCESS}`,
        payload: { cartPayload: json },
      });
      inputRef.current.value = '';
    } catch (error) {
      toast('Add Cart List Fail');
      dispatch({
        type: `${ADD_CART}_${FAIL}`,
        payload: { errorPayload: error },
      });
    }
  }, []);

  const updateCart = useCallback(async item => {
    try {
      dispatch({
        type: `${UPDATE_CART}_${REQUEST}`,
        payload: { loadingPayload: item },
      });
      const res = await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      dispatch({
        type: `${UPDATE_CART}_${SUCCESS}`,
        payload: { cartPayload: json },
      });
    } catch (error) {
      dispatch({
        type: `${UPDATE_CART}_${FAIL}`,
        payload: { errorPayload: item },
      });
    }
  }, []);

  const deleteCart = useCallback(async item => {
    try {
      dispatch({
        type: `${DELETE_CART}_${REQUEST}`,
        payload: { loadingPayload: item },
      });
      await fetch(`http://localhost:3000/cart/${item.id}`, {
        method: 'DELETE',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
      });
      dispatch({
        type: `${DELETE_CART}_${SUCCESS}`,
        payload: { cartPayload: item },
      });
    } catch (error) {
      dispatch({
        type: `${DELETE_CART}_${FAIL}`,
        payload: { errorPayload: item },
      });
    }
  }, []);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  const value = useMemo(
    () => ({
      ...cartState,
      inputRef,
      loadCart,
      addCart,
      updateCart,
      deleteCart,
    }),
    [cartState, inputRef, loadCart, addCart, updateCart, deleteCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCart = () => useContext(CartContext);
