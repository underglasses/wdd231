async function getWeather() {
  const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-0.95&longitude=-80.73&current_weather=true");
  const data = await response.json();
  const weather = data.current_weather;

  let icon = "";
  if (weather.temperature > 28) {
    icon = "☀️"; // hot
  } else if (weather.temperature < 20) {
    icon = "❄️"; // cold
  } else {
    icon = "⛅"; // mild
  }

  document.getElementById("weather").innerHTML = `
    <p>${icon} Temperature: ${weather.temperature}°C</p>
    <p>Windspeed: ${weather.windspeed} km/h</p>
  `;
}
getWeather();
