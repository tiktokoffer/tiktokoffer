<script>
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
    .extra {
      margin-top:20px;
      font-size:1.2em;
      color:#0ff;
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
  <h1>Celebration Mode: SSC Exam Finished!</h1>
  <img src="https://i.ibb.co/4ZnrvRmn/images.jpg" alt="Bayazid, Fahim, Shanto">
  <p>Bayazid, Fahim, and Shanto just wrapped up their SSC 2025 exams!<br>
  Exams done, freedom begun. Time to breathe again 😌</p>
  <p class="extra">We are SSC Batch 2K25 — Hack the Future, Not the System 😎</p>
  <audio autoplay loop>
    <source src="https://www.myinstants.com/media/sounds/anonymous.mp3" type="audio/mpeg">
  </audio>
`;
</script>
