let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart");
}

function loadCart() {
  let cartDiv = document.getElementById("cart");
  if (!cartDiv) return;

  cartDiv.innerHTML = "";
  cart.forEach(item => {
    cartDiv.innerHTML += `<p>${item.name} - KES ${item.price}</p>`;
  });
}

function clearCart() {
  localStorage.removeItem("cart");
  location.reload();
}

loadCart();