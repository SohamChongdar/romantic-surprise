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
const photoScreen = document.getElementById("photoScreen");
const photoNextButton = document.getElementById("photoNextButton");
const letterScreen = document.getElementById("letterScreen");
const letterEnvelope = document.getElementById("letterEnvelope");
const loveLetter = document.getElementById("loveLetter");
const letterButton = document.getElementById("letterButton");
const letterText = document.getElementById("letterText");

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
   COUPLE → PHOTO GALLERY
========================================= */

coupleButton.addEventListener("click", () => {

    coupleButton.disabled = true;

    // Hide couple scene
    coupleScreen.classList.add("hidden");

    // Show photo gallery
    setTimeout(() => {

        photoScreen.classList.remove("hidden");

    }, 700);

});
/* =========================================
   PHOTO → LOVE LETTER
========================================= */

photoNextButton.addEventListener("click", () => {

    photoNextButton.disabled = true;

    // Hide photos
    photoScreen.classList.add("hidden");

    // Show letter screen
    setTimeout(() => {

        letterScreen.classList.remove("hidden");

    }, 700);

});
/* =========================================
   LOVE LETTER ANIMATION
========================================= */

const loveMessage = `My Love,

I don't know if I can ever find enough words to explain what you mean to me.

But if I had to choose one thing I want you to know, it would be this —

You make my ordinary days feel a little more special.

Your smile, your silly little moments, our conversations, our laughs, even our tiny fights... somehow, all of them have become some of my favourite memories.

I don't promise that every day will always be perfect.

But I do promise that I will always cherish the beautiful moments we create together.

Thank you for being you.

And thank you for being a beautiful part of my life.

Happy Girlfriend's Day, my love. ❤️

I love you. 💕`;


let letterStarted = false;


letterButton.addEventListener("click", () => {

    if (letterStarted) return;

    letterStarted = true;

    // Hide Click Me button
    letterButton.classList.add("hidden");

    // Open envelope
    letterEnvelope.classList.add("open");

    // Wait for envelope animation
    setTimeout(() => {

        letterEnvelope.classList.add("hidden");

        loveLetter.classList.remove("hidden");

        typeLoveLetter();

    }, 900);

});


/* =========================================
   TYPEWRITER LETTER
========================================= */

function typeLoveLetter() {

    let index = 0;

    letterText.textContent = "";

    function typeNextCharacter() {

        if (index < loveMessage.length) {

            letterText.textContent +=
                loveMessage.charAt(index);

            index++;

            setTimeout(
                typeNextCharacter,
                28
            );

        }

    }

    typeNextCharacter();

}
