// COOLCHEF — light interactivity only.

document.getElementById("yr").textContent = new Date().getFullYear();

// Pause hero video when off-screen (saves battery on mobile).
const heroVideo = document.querySelector(".hero__video");
if (heroVideo && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) heroVideo.play().catch(() => {});
      else heroVideo.pause();
    },
    { threshold: 0.1 }
  );
  io.observe(heroVideo);
}

// Click-to-play on clip videos with a sound toggle.
document.querySelectorAll(".dj__clips video").forEach((v) => {
  v.addEventListener("click", () => {
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  });
});
