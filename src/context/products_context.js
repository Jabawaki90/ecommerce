import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/products_reducer";

const initialState = {};

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value="">{children}</ProductsContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductsContext);
};
