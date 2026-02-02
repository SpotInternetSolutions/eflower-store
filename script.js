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

// Carousel Auto Slide
let slideIndex = 0;
const slideContainer = document.querySelector('.carousel-slide');
const totalSlides = document.querySelectorAll('.carousel-slide .product').length;

function showNextSlide() {
  slideIndex++;
  if(slideIndex >= totalSlides) slideIndex = 0;
  slideContainer.style.transform = `translateX(-${slideIndex * 270}px)`; // 250px card + 20px gap
}

setInterval(showNextSlide, 3000); // Slide every 3 seconds