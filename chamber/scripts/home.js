// Footer info
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Weather
async function loadWeather() {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=Manta,EC&units=metric&appid=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();

  document.getElementById('current-weather').innerHTML =
    `Temp: ${data.list[0].main.temp}°C, ${data.list[0].weather[0].description}`;

  let forecastHTML = '';
  for (let i = 1; i <= 3; i++) {
    forecastHTML += `<p>Day ${i}: ${data.list[i].main.temp}°C</p>`;
  }
  document.getElementById('forecast').innerHTML = forecastHTML;
}
loadWeather();

// Spotlights
async function loadSpotlights() {
  const response = await fetch('data/member.json');
  const members = await response.json();
  const goldSilver = members.filter(m => m.level === 'Gold' || m.level === 'Silver');
  const randomSpotlights = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlight-container');
  container.innerHTML = '';
  randomSpotlights.forEach(member => {
    container.innerHTML += `
      <div class="spotlight-card">
        <img src="images/${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.tagline}</p>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>Membership Level: ${member.level}</p>
      </div>
    `;
  });
}
loadSpotlights();
