const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/${localStorage.removeItem()}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function addItem(id) {
  return (`${baseUrl}/${localStorage.setItem()}`, { //TODO: you can't take id from localStorage
    method: "POST",
    headers: { "content-type": "application/json" },
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