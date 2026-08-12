import { products } from '.products.mjs';

const grid = document.querySelector('.products-grid');

// cards
products.forEach((product, index) => {
  const card = document.createElement('div');
  card.classList.add('products-card');
  card.style.gridArea = `card${index+1}`;

  const shortDesc = product.description.split(" ").slice(0, 10).join(" ") + "...";

  card.innerHTML = `
    <h2>${product.name}</h2>
    <figure>
      <img src="images/${product.image}" alt="${product.name}" loading="lazy">
    </figure>
    <p class="price">$${product.price.toFixed(2)}</p>
    <p class="desc">${shortDesc}</p>
    <button class="learn-more">Learn More</button>
  `;

  card.querySelector('.learn-more').addEventListener('click', () => {
    card.querySelector('.desc').textContent = product.description;
  });

  grid.appendChild(card);
});

// Visitor message 
const message = document.getElementById('visitor-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (days === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${days} days ago.`;
  }
}
localStorage.setItem('lastVisit', now);
