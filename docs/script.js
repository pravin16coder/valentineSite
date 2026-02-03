const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let noCount = 0;

const noMessages = [
  "Are you sure? 😏",
  "Think again 🙃",
  "That button seems tired 😴",
  "Playing hard to get, huh? 😌",
  "At this point, YES is easier 😂"
];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  message.textContent = noMessages[Math.min(noCount, noMessages.length - 1)];
  noCount++;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      background:linear-gradient(135deg,#ff758c,#ff7eb3);
      color:white;
      font-family:Poppins;
      text-align:center;
    ">
      <h1>YAYYY 💕</h1>
      <p>You just made my Valentine’s Day special 🥰</p>
      <p>🌹🍫🎉</p>
    </div>
  `;
});
