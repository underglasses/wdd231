// Async function to fetch members.json and display them
async function loadMembers() {
  try {
    const response = await fetch('data/member.json');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
  }
}

// Function to display members in the directory
function displayMembers(members) {
  const container = document.getElementById('members');
  container.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h2>${member.name}</h2>
      <p class="tagline">${member.tagline}</p>
      <p>Email: ${member.email}</p>
      <p>Phone: ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">${member.website}</a></p>
      <p>Membership Level: ${member.level}</p>
    `;
    container.appendChild(card);
  });
}

// Toggle between grid and list views
document.getElementById('gridBtn').addEventListener('click', () => {
  document.getElementById('members').className = 'grid-view';
});

document.getElementById('listBtn').addEventListener('click', () => {
  document.getElementById('members').className = 'list-view';
});

// Footer info: copyright year + last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Run the loader
loadMembers();
