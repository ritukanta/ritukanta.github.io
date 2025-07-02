// Set the footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Load particles background
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

// Card data
const cardData = [
  {
    title: "About Me",
    content: `
    <details>
      <summary class='cursor-pointer text-gray-300 hover:text-gray-100'>Tap to reveal</summary>
      <p class='mt-2'>
        I am Batman!
      </p>
    </details>
  `
  },
  {
    title: "Skills",
    content: "<ul class='list-disc list-inside space-y-1 text-gray-300'><li>Mathematics</li><li>LaTeX<li>Python for AI/ML</li><li>HTML, CSS, JS, Next.js</li><li>Linux Distros & AOSP ROMs</li><li>Git and GitHub</li></ul>"
  },
  {
    title: "Projects",
    content: "• Android ROM Builds<br/>• A Few Projects on Mathematics<br/>• ML Model Deployment (past work)"
  },
  {
    title: "Contact",
    content: "Drop a message if you want to collaborate, or just talk tech, Batman."
  }
];

// Render cards
const cardsContainer = document.getElementById('cards');
cardData.forEach(({ title, content }) => {
  const card = document.createElement('div');
  card.className = 'card text-gray-300';
  card.innerHTML = `<h2 class='text-2xl font-semibold mb-2'>${title}</h2><p>${content}</p>`;
  cardsContainer.appendChild(card);
});
