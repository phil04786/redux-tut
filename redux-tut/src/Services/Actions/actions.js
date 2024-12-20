import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

// Action kya kaam karta he:- Data (component ka ya API ka) ko send karta he React ke component se Redux ke store ke ander. 'type' isliye define kiya he aki store ko pata pade ki data kaha se aaya he.

export const addToCart = (data) => {
  console.warn("action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.warn("action");
  return {
    type: REMOVE_TO_CART,
  };
};
