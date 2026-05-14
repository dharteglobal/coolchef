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

// Click-to-play on clip / episode videos.
document.querySelectorAll(".dj__clips video, .episode__media video").forEach((v) => {
  v.addEventListener("click", () => {
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  });
});

// Auto-pause feed tile videos when offscreen so they don't drain battery.
const feedVideos = document.querySelectorAll(".tile--video video");
if (feedVideos.length && "IntersectionObserver" in window) {
  const feedIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const v = entry.target;
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      });
    },
    { threshold: 0.25 }
  );
  feedVideos.forEach((v) => feedIO.observe(v));
}
