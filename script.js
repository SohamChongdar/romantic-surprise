/* =========================================
   ROMANTIC SURPRISE
   COMPLETE SCRIPT
========================================= */


/* =========================================
   ELEMENTS
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

const finalScreen = document.getElementById("finalScreen");
const moreButton = document.getElementById("moreButton");


/* =========================================
   FLOWERS
========================================= */

const flowers = [
    "🌸",
    "🌷",
    "🌺",
    "🌼",
    "💮"
];


/* =========================================
   LOVE LETTER
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


/* =========================================
   START EXPERIENCE
========================================= */

if (startButton) {

    startButton.addEventListener("click", startSurprise);

}


function startSurprise() {

    if (!startButton) return;

    startButton.disabled = true;


    /* Start music */

    if (backgroundMusic) {

        backgroundMusic.volume = 0.45;

        backgroundMusic.play().catch(error => {

            console.log(
                "Music could not start:",
                error
            );

        });

    }


    /* Hide welcome */

    if (welcomeScreen) {

        welcomeScreen.classList.add("hidden");

    }


    /* Show flowers */

    setTimeout(() => {

        if (flowerScreen) {

            flowerScreen.classList.remove("hidden");

        }

        createFlowers();

    }, 700);

}


/* =========================================
   CREATE FLOWERS
========================================= */

function createFlowers() {

    if (!flowerContainer) return;


    flowerContainer.innerHTML = "";


    const flowerCount = 90;


    for (let i = 0; i < flowerCount; i++) {

        const flower =
            document.createElement("div");


        flower.classList.add("flower");


        const randomFlower =
            flowers[
                Math.floor(
                    Math.random() * flowers.length
                )
            ];


        flower.innerHTML = randomFlower;


        const left =
            Math.random() * 100;

        const top =
            Math.random() * 100;

        const size =
            25 + Math.random() * 45;

        const duration =
            2 + Math.random() * 3;

        const delay =
            Math.random() * 1.5;


        flower.style.position = "absolute";

        flower.style.left = `${left}%`;

        flower.style.top = `${top}%`;

        flower.style.fontSize =
            `${size}px`;

        flower.style.opacity = "0";

        flower.style.transform =
            "scale(0)";

        flower.style.transition =
            `opacity 1s ease ${delay}s,
             transform ${duration}s cubic-bezier(.17,.67,.32,1.3) ${delay}s`;

        flower.style.filter =
            "drop-shadow(0 0 8px rgba(255,255,255,0.6))";

        flower.style.zIndex = "5";


        flowerContainer.appendChild(flower);


        setTimeout(() => {

            flower.style.opacity = "1";

            flower.style.transform =
                `scale(${0.8 + Math.random() * 0.8})
                 rotate(${Math.random() * 30 - 15}deg)`;

        }, 50);

    }


    /* Flowers stay for 7 seconds */

    setTimeout(() => {

        fadeFlowers();

    }, 7000);

}


/* =========================================
   FLOWERS → COUPLE
========================================= */

function fadeFlowers() {

    const allFlowers =
        document.querySelectorAll(".flower");


    allFlowers.forEach(
        (flower, index) => {

            setTimeout(() => {

                flower.style.opacity = "0";

                flower.style.transform =
                    "scale(1.4) translateY(-30px)";

            }, index * 15);

        }
    );


    setTimeout(() => {

        if (flowerScreen) {

            flowerScreen.classList.add("hidden");

        }


        if (coupleScreen) {

            coupleScreen.classList.remove("hidden");

        }

    }, 3200);

}


/* =========================================
   COUPLE → PHOTOS
========================================= */

if (coupleButton) {

    coupleButton.addEventListener(
        "click",
        () => {

            coupleButton.disabled = true;


            if (coupleScreen) {

                coupleScreen.classList.add(
                    "hidden"
                );

            }


            setTimeout(() => {

                if (photoScreen) {

                    photoScreen.classList.remove(
                        "hidden"
                    );

                }

            }, 700);

        }
    );

}


/* =========================================
   PHOTOS → LOVE LETTER
========================================= */

if (photoNextButton) {

    photoNextButton.addEventListener(
        "click",
        () => {

            photoNextButton.disabled = true;


            if (photoScreen) {

                photoScreen.classList.add(
                    "hidden"
                );

            }


            setTimeout(() => {

                if (letterScreen) {

                    letterScreen.classList.remove(
                        "hidden"
                    );

                }

            }, 700);

        }
    );

}


/* =========================================
   LOVE LETTER
========================================= */

let letterStarted = false;


if (letterButton) {

    letterButton.addEventListener(
        "click",
        () => {

            if (letterStarted) return;

            letterStarted = true;


            /* Hide button */

            letterButton.classList.add(
                "hidden"
            );


            /* Open envelope */

            if (letterEnvelope) {

                letterEnvelope.classList.add(
                    "open"
                );

            }


            /* Show letter */

            setTimeout(() => {

                if (letterEnvelope) {

                    letterEnvelope.classList.add(
                        "hidden"
                    );

                }


                if (loveLetter) {

                    loveLetter.classList.remove(
                        "hidden"
                    );

                }


                typeLoveLetter();

            }, 900);

        }
    );

}


/* =========================================
   TYPEWRITER
========================================= */

function typeLoveLetter() {

    if (!letterText) return;


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

       } else {

            /* Letter finished */

            showMoreButton();

        }

    }


    typeNextCharacter();

}
/* =========================================
   MORE BUTTON → FINAL SURPRISE
========================================= */

document.addEventListener("click", function (event) {

    const clickedButton =
        event.target.closest("#moreButton");

    if (!clickedButton) return;


    // Hide love letter
    if (letterScreen) {
        letterScreen.classList.add("hidden");
    }


    // Show final surprise
    if (finalScreen) {
        finalScreen.classList.remove("hidden");
    }

});
