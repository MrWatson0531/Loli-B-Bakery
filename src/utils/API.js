export const baseUrl = "http://localhost:3001";


function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
} 

function createCart({cart}) {
  return fetch(`${baseUrl}/user/cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({cart}),
  }).then(checkResponse);
}

function getCart({ user }) {
  return fetch(`${baseUrl}/user/cart`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({ user }),
  }).then(checkResponse);
}

function addToCart( item ) {
  return fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify( item ),
  }).then(checkResponse);
}

function removeFromCart({ item }) {
  return fetch(`${baseUrl}/cart`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item }),
  }).then(checkResponse);
}

export { createCart, getCart, addToCart, removeFromCart, checkResponse };
