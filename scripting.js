document.addEventListener("DOMContentLoaded", () => {
  let cart = [];
  let cartCount = 0;
  let total = 0;

  const cartCounter = document.getElementById("cartCount");
  const buttons = document.querySelectorAll(".food-info button");
  const cartPanel = document.getElementById("cartPanel");
  const cartItemsContainer = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  const offersLink = document.querySelector(".nav-links a:first-child");
  const offersModal = document.getElementById("offersModal");
  const closeOffers = document.getElementById("closeOffers");

  offersLink.addEventListener("click", (e) => {
    e.preventDefault();
    offersModal.classList.add("active");
  });

  closeOffers.addEventListener("click", () => {
    offersModal.classList.remove("active");
  });

  const signInLink = document.querySelector(".nav-links a:nth-child(2)");
  const signinModal = document.getElementById("signinModal");
  const closeSignin = document.getElementById("closeSignin");
  const sendOtpBtn = document.getElementById("sendOtpBtn");
  const otpSection = document.getElementById("otpSection");

  signInLink.addEventListener("click", (e) => {
    e.preventDefault();
    signinModal.classList.add("active");
  });

  closeSignin.addEventListener("click", () => {
    signinModal.classList.remove("active");
  });

  sendOtpBtn.addEventListener("click", () => {
    const phone = document.getElementById("phoneInput").value;

    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    otpSection.style.display = "block";
  });

  // ADD TO CART
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const card = e.target.closest(".food-card");
      const name = card.querySelector("h3").textContent;
      const price = parseInt(
        card.querySelector(".price").textContent.replace("₹", ""),
      );

      cart.push({ name, price });
      cartCount++;
      total += price;

      cartCounter.textContent = cartCount;
      updateCartUI();
    });
  });

  function updateCartUI() {
    cartItemsContainer.innerHTML = "";

    cart.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `<span>${item.name}</span> <span>₹${item.price}</span>`;
      cartItemsContainer.appendChild(div);
    });

    cartTotal.textContent = total;
  }

  document.querySelector(".cart-btn").addEventListener("click", () => {
    cartPanel.classList.add("active");
  });

  document.getElementById("closeCart").addEventListener("click", () => {
    cartPanel.classList.remove("active");
  });

  document.getElementById("payBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
    } else {
      alert("Payment Successful 🎉");
      cart = [];
      cartCount = 0;
      total = 0;
      cartCounter.textContent = 0;
      updateCartUI();
      cartPanel.classList.remove("active");
    }
  });
});

