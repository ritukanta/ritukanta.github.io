
document.getElementById("year").textContent = new Date().getFullYear();

tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "#000" } },
  particles: {
    number: { value: 50 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.3 },
    size: { value: 2 },
    move: { enable: true, speed: 0.6 }
  }
});

const cardData = [
  {
    title: "About Me",
    content: "I build elegant and minimal interfaces with strong backend logic. Passionate about Linux, systems, and powerful web experiences."
  },
  {
    title: "Skills",
    content: "<ul class='list-disc list-inside space-y-1 text-gray-300'><li>Mathematics</><li>Python for AI/ML</li><li>React, Tailwind, Next.js</li><li>Linux & Custom ROMs</li><li>Git, Firebase, REST APIs</li></ul>"
  },
  {
    title: "Projects",
    content: "• Android ROM Builds<br/>• Portfolio Website<br/>• ML Model Deployment (past work)"
  },
  {
    title: "Contact",
    content: "Drop a message if you want to collaborate, or just talk tech, Batman."
  }
];

const cardsContainer = document.getElementById('cards');
cardData.forEach(({ title, content }) => {
  const card = document.createElement('div');
  card.className = 'card text-gray-300';
  card.innerHTML = `<h2 class='text-2xl font-semibold mb-2'>${title}</h2><p>${content}</p>`;
  cardsContainer.appendChild(card);
});
fetch("https://api.countapi.xyz/hit/ritukanta-portfolio/visits")
  .then((res) => res.json())
  .then((data) => {
    const visitText = `Visits: ${data.value}`;
    const visitDiv = document.createElement("div");
    visitDiv.textContent = visitText;
    visitDiv.className = "text-center text-gray-500 text-xs mt-4";
    document.querySelector("footer").appendChild(visitDiv);
  });
