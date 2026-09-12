/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint =
            120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");

        }

    });

};


window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================================
   WISH BUTTON
========================================= */

const wishButton =
    document.getElementById("wishButton");

const wishMessage =
    document.getElementById("wishMessage");


wishButton.addEventListener(
    "click",
    () => {

        wishMessage.classList.add("show");

        wishButton.innerHTML =
            "Wish Sent Into The Universe ✨";

        wishButton.style.pointerEvents =
            "none";

    }
);


/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;

        const floatingElements =
            document.querySelector(
                ".floating-elements"
            );

        if (floatingElements) {

            floatingElements.style.transform =
                `translateY(${scrollY * 0.08}px)`;

        }

    }
);


/* =========================================
   SMOOTH IMAGE CARD MOVEMENT
========================================= */

const memoryCards =
    document.querySelectorAll(
        ".memory-card"
    );


window.addEventListener(
    "scroll",
    () => {

        memoryCards.forEach(
            (card, index) => {

                const rect =
                    card.getBoundingClientRect();

                const center =
                    window.innerHeight / 2;

                const distance =
                    rect.top - center;

                const movement =
                    distance * -0.025;

                if (
                    Math.abs(distance) <
                    window.innerHeight
                ) {

                    const image =
                        card.querySelector(
                            ".photo-placeholder"
                        );

                    if (image) {

                        image.style.transform =
                            `translateY(${movement}px)`;

                    }

                }

            }
        );

    }
);