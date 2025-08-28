// import { baseUrl } from "./api";

function getToken() {
  return localStorage.getItem("jwt");
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function signUp(email, password){
  return fetch(`/signup`,{
    method:"POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password}),
  }).then(checkResponse)
}

// 🔹 Sign in
function signIn(email, password) {
  return fetch(`/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(checkResponse);
}

// 🔹 Verify token / get current user
function checkToken(token) {
  return fetch(`/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

// 🔹 Logout (just clear localStorage)
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return Promise.resolve();
}

export { signIn, checkToken, logout, checkResponse, getToken, signUp };
