// script.js
// Pretend this is fetched from an API
const data = [
  { id: 1, name: "Ali", role: "Software Engineer" },
  { id: 2, name: "Sara", role: "Designer" },
  { id: 3, name: "Hamza", role: "Project Manager" },
  { id: 4, name: "Umar", role: "Project Manager" },
  { id: 5, name: "Muzammil", role: "ML Engineer" },
];

// Grab the container div
const container = document.getElementById("container");

// Use .map() to create HTML for each object
const cards = data.map((item) => {
  return `
    <div class="card">
      <div class="name">${item.name}</div>
      <div class="role">${item.role}</div>
    </div>
  `;
});

// Inject it into the page
container.innerHTML = cards.join(""); // join() to avoid commas
