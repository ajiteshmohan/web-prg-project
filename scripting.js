let cartCount = 0;
const cartCounter = document.getElementById("cartCount");
const buttons = document.querySelectorAll(".food-info button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCounter.textContent = cartCount;
    alert("Item added to cart!");
  });
});

function searchFood() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".food-card");

  cards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(input) ? "block" : "none";
  });
}

const orderBtn = document.querySelector(".hero button");
orderBtn.addEventListener("click", () => {
  document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});
