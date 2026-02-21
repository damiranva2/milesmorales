
const bg = document.querySelector(".background img");

document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    bg.style.transform = `translate(${-x}px, ${-y}px)`;
});

  document.addEventListener("click", function () {
    const audio = document.querySelector("audio");
    audio.play();
  }, { once: true });





const img = document.getElementById("miles");

function randomGlitch() {
  const delay = Math.random() * 4000 + 1000; 

  setTimeout(() => {
    img.classList.add("glitch-img");

    setTimeout(() => {
      img.classList.remove("glitch-img");
      randomGlitch(); 
    }, 200); 
  }, delay);
}

randomGlitch();

let isWebMode = false;
let followWeb = null;

const webBtn = document.querySelector(".webshoot");
const webAudio = new Audio("./music/web.mp3");
const blastAudio = new Audio("./music/blast.mp3");
webBtn.addEventListener("click", () => {
  if (isVenomMode === false) {
  isWebMode = !isWebMode;

  if (isWebMode) {

    followWeb = document.createElement("img");
    followWeb.src = "./images/web.png";
    followWeb.classList.add("web-follow");
    document.body.appendChild(followWeb);
  } else {

    if (followWeb) {
      followWeb.remove();
      followWeb = null;
    }
  }
  } else {
    console.log("Please disable Web Shoot mode before activating Venom Blast!");
  }
});


document.addEventListener("mousemove", (e) => {
  if (isWebMode && followWeb) {
    followWeb.style.left = e.pageX + "px";
    followWeb.style.top = e.pageY + "px";
  }
});


document.addEventListener("click", (e) => {
  if (isWebMode && followWeb) {
    const newWeb = document.createElement("img");
    newWeb.src = "./images/web.png";
    newWeb.classList.add("web-follow");

    newWeb.style.left = e.pageX + "px";
    newWeb.style.top = e.pageY + "px";
    newWeb.style.zIndex = 100000;
    webAudio.play();
    document.body.appendChild(newWeb);

  }
});

let isVenomMode = false;
let followVenom = null;

const venomBtn = document.querySelector(".venomblast");


venomBtn.addEventListener("click", () => {
  if (isWebMode === false) {
  isVenomMode = !isVenomMode;

  if (isVenomMode) {

    followVenom = document.createElement("img");
    followVenom.src = "./images/venomblast.png";
    followVenom.classList.add("venom-follow");
    document.body.appendChild(followVenom);
  } else {

    if (followVenom) {
      followVenom.remove();
      followVenom = null;
    }
  }
  } else {
    console.log("Please disable Web Shoot mode before activating Venom Blast!");
  }
});


document.addEventListener("mousemove", (e) => {
  if (isVenomMode && followVenom) {
    followVenom.style.left = e.pageX + "px";
    followVenom.style.top = e.pageY + "px";
  }
});


document.addEventListener("click", (e) => {
  
    
  
  if (isVenomMode && followVenom) {
    const newVenom = document.createElement("img");
    newVenom.src = "./images/crack.png";
    newVenom.classList.add("venom-follow");

    newVenom.style.left = e.pageX + "px";
    newVenom.style.top = e.pageY + "px";
    newVenom.style.zIndex = 100000;
    blastAudio.play();
    document.body.appendChild(newVenom);
  }
  
});

let quotes = [
  "With great power comes great responsibility.",
  "Anyone can wear the mask.",
  "It’s a leap of faith",
  "Our family doesn’t run from things",
  "I’m Spider-Man",
  "You have to believe in yourself.", 
  "What makes you different is what makes you Spider-Man."
];

const quoteElement = document.querySelector(".quote");
const spinButton = document.querySelector(".spin-button");

spinButton.addEventListener("click", () => {
  spinButton.disabled = true; 

  let totalDuration = 3000; 
  let startTime = Date.now();
  let delay = 50; 

  function spin() {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];

    let elapsed = Date.now() - startTime;

    if (elapsed < totalDuration) {
      
      delay += 20;
      setTimeout(spin, delay);
    } else {
      
      const finalIndex = Math.floor(Math.random() * quotes.length);
      quoteElement.textContent = quotes[finalIndex];
      spinButton.disabled = false;
    }
  }

  spin();
});
