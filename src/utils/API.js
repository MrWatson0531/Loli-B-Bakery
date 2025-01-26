const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function addItem({ name, imageUrl, price }) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    body: JSON.stringify({ name: name, imageUrl: imageUrl, price: price }),
    headers: { "content-type": "application/json" },
  }).then(checkResponse);
}

function getItems() {
  return fetch(`${baseUrl}/items`, {
    headers: { "content-type": "application/json" },
  }).then(checkResponse);
}

function getCart() {
  return fetch(`${baseUrl}/cart`, {
    headers: { "content-teype": "application/json" },
  }).then(checkResponse);
}

export {deleteItem, addItem, getItems, getCart}