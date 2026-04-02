document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Fade Animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".cursor-trail");

document.addEventListener("mousemove", e => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";

  setTimeout(() => {
    trail.style.top = e.clientY + "px";
    trail.style.left = e.clientX + "px";
  }, 80);
});
document.addEventListener("click", function(e) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});
document.querySelectorAll(".reel").forEach(video => {

  // click play/pause
  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

  // hover play
  video.addEventListener("mouseenter", () => video.play());

  // hover pause
  video.addEventListener("mouseleave", () => video.pause());

});