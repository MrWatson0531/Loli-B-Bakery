const baseUrl = "http://localhost:3000";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/${localStorage.removeItem()}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function addItem(bakeryItem) {
  localStorage.setItem("cartItem", JSON.stringify(bakeryItem));
  return fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body:JSON.stringify(bakeryItem), 
  }).then(checkResponse);
}

function getItems() {
  return fetch(`${baseUrl}/`, {
    headers: { "content-type": "application/json" },
  }).then(checkResponse);
}

function getCart() {
  return fetch(`${baseUrl}/cart`, {
    headers: { "content-teype": "application/json" },
  }).then(checkResponse);
}

export {deleteItem, addItem, getItems, getCart, checkResponse}