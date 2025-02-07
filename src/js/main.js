function backgroundVideo() {
    const header = document.querySelector(".background-video");
    if (!header) return;

    const video = document.createElement("video");
    video.src = "src/video/background.mp4";
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add("video-element");
    header.appendChild(video);
}
backgroundVideo();

function applyFadeInEffect(element, delay) {
    if (element) {
        element.classList.add("fade-in");
        setTimeout(() => {
            element.classList.add("visible");
        }, delay);
    }
}

const profileImage = document.querySelector(".profile-image img");
const profileTitle = document.querySelector(".profile h1");
const profileDescription = document.createElement("p");
profileDescription.textContent = "Front-End & Back-End Development";
profileDescription.classList.add("profile-description", "fade-in");
profileTitle.insertAdjacentElement("afterend", profileDescription);

const buttons = document.querySelectorAll(".links ul li a");

applyFadeInEffect(profileImage, 500);
applyFadeInEffect(profileTitle, 700);
applyFadeInEffect(profileDescription, 900);

function addHoverEffect(element, hoverClass) {
    if (element) {
        element.addEventListener("mouseenter", () => element.classList.add(hoverClass));
        element.addEventListener("mouseleave", () => element.classList.remove(hoverClass));
    }
}

addHoverEffect(profileImage, "hover-effect");
addHoverEffect(profileTitle, "hover-effect-title");
addHoverEffect(profileDescription, "hover-effect-title");

function startPulsingEffect(element) {
    setInterval(() => {
        element.classList.toggle("pulse-effect");
    }, 2000);
}

buttons.forEach(button => {
    startPulsingEffect(button);
});
