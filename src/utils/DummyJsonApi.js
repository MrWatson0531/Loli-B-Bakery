import {checkResponse} from "../utils/auth"
export const baseUrl = 'https://dummyjson.com/carts/add';






// ----- CART LOGIC -----
export const createCart = async (userId) => {
  const res = await fetch(`${baseUrl}/carts/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId,
      products: [],
    }),
  })
  .then ({checkResponse});
};

export const getCart = async (cartId) => {
  const res = await fetch(`${baseUrl}/carts/${cartId}`)
  .then ({checkResponse});
};

export const addToCart = async (cartId, productId, quantity = 1) => {
  const res = await fetch(`${baseUrl}/carts/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      merge: true,
      products: [{ id: productId, quantity }],
    }),
  }).then ({checkResponse});
};

export const removeFromCart = async (cartId, productId) => {
  // DummyJSON doesn’t have a "remove" endpoint, so we re-send cart without that product
  const cart = await getCart(cartId);
  const updatedProducts = cart.products.filter((p) => p.id !== productId);

  const res = await fetch(`${baseUrl}/carts/${cartId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ products: updatedProducts }),
  })
  .then ({checkResponse});
};

// ----- AUTH LOGIC (simplified) -----
export const login = async (username, password) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  }).then ({checkResponse});
};

export const getUser = async (token) => {
  const res = await fetch(`${baseUrl}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then({checkResponse});
};