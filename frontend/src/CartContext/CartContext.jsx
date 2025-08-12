import { createContext, useReducer, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

// Consistent localStorage key
const STORAGE_KEY = "cartItems";

const getInitialCart = () => {
  // Only run in browser
  if (typeof window === "undefined") return { items: [] };

  const saved = localStorage.getItem(STORAGE_KEY);
  // saved is JSON-serialized array of items
  return saved ? { items: JSON.parse(saved) } : { items: [] };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_CART":
      return { ...state, items: action.payload };

    case "ADD_ITEM": {
      const itemToAdd = { ...action.payload, quantity: action.payload.quantity || 1 };
      const exists = state.items.find(
        i => i.id === itemToAdd.id && (i.source === itemToAdd.source || (!i.source && !itemToAdd.source))
      );
      if (exists) {
        return {
          ...state,
          items: state.items.map(i =>
            i.id === itemToAdd.id && (i.source === itemToAdd.source || (!i.source && !itemToAdd.source))
              ? { ...i, quantity: i.quantity + itemToAdd.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, itemToAdd] };
    }

    case "CLEAR_CART":
      return { ...state, items: [] };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items
          .map(i =>
            i.id === action.payload.id && (i.source === action.payload.source || (!i.source && !action.payload.source))
              ? { ...i, quantity: action.payload.quantity }
              : i
          )
          .filter(i => i.quantity > 0),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter(
          i => !(
            i.id === action.payload.id && (i.source === action.payload.source || (!i.source && !action.payload.source))
          )
        ),
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, null, getInitialCart);

  // Fetch stored cart from server if authenticated
  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;
      try {
        const { data } = await axios.get("http://localhost:4000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });
// flatten each { book, quantity } into { id, title, price, author, quantity }
      const normalized = data.cart.items.map(item => ({
        id: item.book._id,
        title: item.book.title,
        price: item.book.price,
        author: item.book.author,
        source: item.book.source,   // if you’re using `source`
        quantity: item.quantity,
      }));
      dispatch({ type: "LOAD_CART", payload: normalized });
      } catch (err) {
        if (err.response?.status === 401) {
          console.warn("Token invalid or expired—using local cart");
        } else {
          console.error("Failed to load cart:", err);
        }
      }
    };
    fetchCart();
  }, []);

  // Persist cart items locally
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items]);

  const addToCart = async product => {
    const token = localStorage.getItem("authToken");
console.log("▶️ addToCart called for product", product);
    const qty = product.quantity || 1;
    if (token) {
      try {
        const { data } = await axios.post(
          "http://localhost:4000/api/cart/add",
          { bookId: product.id, quantity: qty },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const added =
          data.cart.items.find(i => i.book._id === product.id) ||
          { book: { _id: product.id, ...product }, quantity: qty };
        dispatch({
          type: "ADD_ITEM",
          payload: {
            id: added.book._id,
            title: added.book.title,
            price: added.book.price,
            source: added.book.source,
            quantity: added.quantity,
          },
        });
        return;
      } catch (err) {
        console.error("Add failed, updating locally:", err);
      }
    }
    dispatch({ type: "ADD_ITEM", payload: product });
  };

  const updateCartItem = async ({ id, source, quantity }) => {
const token = localStorage.getItem("authToken");

   // If quantity falls to zero or below, just remove the item
   if (quantity <= 0) {
     return removeFromCart({ id, source });
    }

    if (token) {
      try {
        await axios.put(
          "http://localhost:4000/api/cart/update",
          { bookId: id, quantity },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch({ type: "UPDATE_ITEM", payload: { id, source, quantity } });
        return;
      } catch (err) {
        console.error("Update failed, updating locally:", err.response?.data || err);
      }
    }
    // Fallback to local update if server call fails or no token
    dispatch({ type: "UPDATE_ITEM", payload: { id, source, quantity } });
  }

  const removeFromCart = async ({ id, source }) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        await axios.delete(
          `http://localhost:4000/api/cart/remove/${id}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        dispatch({ type: "REMOVE_ITEM", payload: { id, source } });
        return;
      } catch (err) {
        console.error("Remove failed, updating locally:", err);
      }
    }
    dispatch({ type: "REMOVE_ITEM", payload: { id, source } });
  };

    // Clear both server-side and local cart
  const clearCart = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        await axios.delete("http://localhost:4000/api/cart/clear", {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (err) {
        console.error("Failed to clear server cart:", err);
      }
    }
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider value={{ cart: state, addToCart, updateCartItem, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
