const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Dynamics Fundamentals", credits: 3, completed: false },
  { code: "CSE111", name: "Intro to Programming", credits: 3, completed: true },
  { code: "CSE210", name: "C#", credits: 3, completed: false }
];

function displayCourses(filter = "all") {
  const list = document.getElementById("courseList");
  list.innerHTML = "";

  let filtered = courses;
  if (filter === "wdd") filtered = courses.filter(c => c.code.startsWith("WDD"));
  if (filter === "cse") filtered = courses.filter(c => c.code.startsWith("CSE"));

  filtered.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    list.appendChild(card);
  });

  const total = filtered.reduce((sum, course) => sum + course.credits, 0);
  document.getElementById("totalCredits").textContent = total;
}

document.getElementById("all").addEventListener("click", () => displayCourses("all"));
document.getElementById("wdd").addEventListener("click", () => displayCourses("wdd"));
document.getElementById("cse").addEventListener("click", () => displayCourses("cse"));

displayCourses();
