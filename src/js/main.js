function backgroundVideo() {
    const header = document.querySelector(".background-video");
    if (!header) return;

    const video = document.createElement("video");
    video.src = "src/video/background.mp4"; // Смени с линк към твоето видео
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.classList.add("video-element");
    
    header.appendChild(video);
}
backgroundVideo();