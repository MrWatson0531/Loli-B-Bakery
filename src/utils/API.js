import { getToken } from "./auth";

export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.loli-b-bakery.smelly.cc"
    : "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function createCart({ cart }) {
  return fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ cart }),
  }).then(checkResponse);
}

function getCart({ user }) {
  return fetch(`${baseUrl}/cart`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
  }).then(checkResponse);
}

function addToCart(item) {
  return fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ item, quantity: 1 }),
  }).then(checkResponse);
}

function removeFromCart({ item }) {
  return fetch(`${baseUrl}/cart`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ item }),
  }).then(checkResponse);
}

export { createCart, getCart, addToCart, removeFromCart, checkResponse };
