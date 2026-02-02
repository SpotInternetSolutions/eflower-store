// USERS
function register() {
  let email = document.getElementById("regEmail").value;
  let password = document.getElementById("regPassword").value;

  localStorage.setItem("user", JSON.stringify({ email, password }));
  alert("Account created. Please login.");
  window.location.href = "login.html";
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.email === email && user.password === password) {
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid login details");
  }
}

// CART
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}