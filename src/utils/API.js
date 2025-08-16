const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error:  ${res.status}`);
}

function deleteItem(id) {
  return fetch(`${baseUrl}/${localStorage.removeItem()}`, {
    method: "DELETE",
  }).then(checkResponse);
}

function addItem(itemId) {
  localStorage.setItem("cartItem", JSON.stringify(itemId));
  return fetch(`${baseUrl}/cart`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ itemId }),
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

export { deleteItem, addItem, getItems, getCart, checkResponse };
