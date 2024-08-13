import React, { createContext, useReducer, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const WishlistStateContext = createContext(null);
export const WishlistDispatchContext = createContext(null);

const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";

const initialState = {
  items: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      return { ...state, items: [...state.items, payload] };
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((i) => i.id !== payload),
      };
    default:
      throw new Error(`Invalid action: ${type}`);
  }
};

export const WishlistProvider = ({ children }) => {
  const [savedWishlist, saveWishlist] = useLocalStorage(
    "items-wishlist",
    JSON.stringify(initialState)
  );
  const [state, dispatch] = useReducer(reducer, JSON.parse(savedWishlist));

  useEffect(() => {
    saveWishlist(JSON.stringify(state));
  }, [state, saveWishlist]);

  const addItem = (item) => {
    if (!item.id) return;

    const existing = state.items.find((i) => i.id === item.id);

    if (existing) return dispatch({ type: REMOVE_PRODUCT, payload: item.id });

    dispatch({ type: ADD_PRODUCT, payload: item });
  };

  const removeItem = (id) => {
    if (!id) return;

    dispatch({ type: REMOVE_PRODUCT, payload: id });
  };

  const isSaved = (id) => state.items.some((i) => i.id === id);

  const hasItems = state.items.length > 0;

  return (
    <WishlistDispatchContext.Provider value={{ addItem, removeItem }}>
      <WishlistStateContext.Provider value={{ ...state, isSaved, hasItems }}>
        {children}
      </WishlistStateContext.Provider>
    </WishlistDispatchContext.Provider>
  );
};
