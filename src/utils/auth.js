function getToken() {
  return localStorage.getItem("jwt");
}

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

const baseUrl = "https://dummyjson.com/auth";

// 🔹 Sign in
function signIn(username, password) {
  return fetch(`${baseUrl}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(checkResponse);
}

// 🔹 Verify token / get current user
function checkToken(token) {
  return fetch(`${baseUrl}/me`, {
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

export { signIn, checkToken, logout, checkResponse, getToken };
