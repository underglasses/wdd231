async function loadData() {
  try {
    const response = await fetch("data/data.json"); // adjust path if needed
    const data = await response.json();

    // About section (About page)
    const aboutSection = document.querySelector(".about p");
    if (aboutSection) {
      aboutSection.textContent = data.about;
    }

    // Owners section (Index + About page)
    const ownersSection = document.querySelector(".owners");
    if (ownersSection) {
      ownersSection.innerHTML = "<h2>Meet the Owners</h2>";
      data.coowners.forEach(owner => {
        const div = document.createElement("div");
        div.classList.add("owner");
        div.innerHTML = `
          <img src="images/owner_${owner.name.toLowerCase()}.webp" alt="${owner.name}">
          <p><strong>${owner.name}</strong></p>
          <p>${owner.description}</p>
        `;
        ownersSection.appendChild(div);
      });
    }

    // Goal section (optional for Index)
    const goalSection = document.querySelector(".goal");
    if (goalSection) {
      goalSection.textContent = data.goal;
    }

  } catch (error) {
    console.error("Error loading data.json:", error);
  }
}

loadData();
