/* =========================================
   ROMANTIC SURPRISE
   STEP 1 - FLOWER ANIMATION
========================================= */

const startButton = document.getElementById("startButton");
const welcomeScreen = document.getElementById("welcomeScreen");
const flowerScreen = document.getElementById("flowerScreen");
const flowerContainer = document.getElementById("flowerContainer");
const backgroundMusic = document.getElementById("backgroundMusic");
const coupleScreen = document.getElementById("coupleScreen");
const coupleButton = document.getElementById("coupleButton");

/* =========================================
   FLOWER SETTINGS
========================================= */

const flowers = [
    "🌸",
    "🌷",
    "🌺",
    "🌼",
    "💮"
];


/* =========================================
   START EXPERIENCE
========================================= */

startButton.addEventListener("click", startSurprise);


function startSurprise() {

    // Prevent multiple clicks
    startButton.disabled = true;

    // Start background music
    backgroundMusic.volume = 0.45;

    backgroundMusic.play().catch(error => {
        console.log("Music could not start:", error);
    });

    // Hide first screen
    welcomeScreen.classList.add("hidden");

    // Show flower screen
    setTimeout(() => {

        flowerScreen.classList.remove("hidden");

        createFlowers();

    }, 700);
}

/* =========================================
   CREATE MANY FLOWERS
========================================= */

function createFlowers() {

    flowerContainer.innerHTML = "";

    const flowerCount = 90;

    for (let i = 0; i < flowerCount; i++) {

        const flower = document.createElement("div");

        flower.classList.add("flower");

        // Pick random flower
        const randomFlower =
            flowers[Math.floor(Math.random() * flowers.length)];

        flower.innerHTML = randomFlower;


        /* Random position */

        const left = Math.random() * 100;
        const top = Math.random() * 100;


        /* Random size */

        const size = 25 + Math.random() * 45;


        /* Random animation */

        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 1.5;


        flower.style.position = "absolute";

        flower.style.left = `${left}%`;
        flower.style.top = `${top}%`;

        flower.style.fontSize = `${size}px`;

        flower.style.opacity = "0";

        flower.style.transform = "scale(0)";

        flower.style.transition =
            `opacity 1s ease ${delay}s,
             transform ${duration}s cubic-bezier(.17,.67,.32,1.3) ${delay}s`;

        flower.style.filter =
            "drop-shadow(0 0 8px rgba(255,255,255,0.6))";

        flower.style.zIndex = "5";


        flowerContainer.appendChild(flower);


        /* Start flower animation */

        setTimeout(() => {

            flower.style.opacity = "1";

            flower.style.transform =
                `scale(${0.8 + Math.random() * 0.8}) rotate(${Math.random() * 30 - 15}deg)`;

        }, 50);
    }


    /* =========================================
       AFTER FLOWERS APPEAR
    ========================================= */

    setTimeout(() => {

        fadeFlowers();

    }, 7000);
}


/* =========================================
   FLOWERS FADE AWAY
========================================= */

/* =========================================
   FLOWERS FADE → COUPLE SCENE
========================================= */

function fadeFlowers() {

    const allFlowers =
        document.querySelectorAll(".flower");


    // Fade all flowers away

    allFlowers.forEach((flower, index) => {

        setTimeout(() => {

            flower.style.opacity = "0";

            flower.style.transform =
                "scale(1.4) translateY(-30px)";

        }, index * 15);

    });


    // After flowers disappear,
    // show the cute couple scene

    setTimeout(() => {

        flowerScreen.classList.add("hidden");

        coupleScreen.classList.remove("hidden");

    }, 3200);
}


/* =========================================
   COUPLE BUTTON
========================================= */

coupleButton.addEventListener("click", () => {

    console.log("Couple button clicked ❤️");

    // Next: Photo Gallery
    // We will connect this in the next step.

});

