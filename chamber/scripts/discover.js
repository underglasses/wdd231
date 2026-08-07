import { places } from '../data/discover.mjs';

const grid = document.querySelector('.discover-grid');

// cards
places.forEach((place, index) => {
  const card = document.createElement('div');
  card.classList.add('discover-card');
  card.style.gridArea = `card${index+1}`;

  const shortDesc = place.description.split(" ").slice(0, 10).join(" ") + "...";

  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
      <img src="images/${place.image}" alt="${place.name}" loading="lazy">
    </figure>
    <address>${place.address}</address>
    <p class="desc">${shortDesc}</p>
    <button class="learn-more">Learn More</button>
  `;

    card.querySelector('.learn-more').addEventListener('click', () => {
    card.querySelector('.desc').textContent = place.description;
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

// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

