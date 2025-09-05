// Redirect when clicking search box
function goToSolutions() {
  window.location.href = "solutions.html";
}

// GSAP animations
gsap.from(".navbar", { y: -100, opacity: 0, duration: 1 });
gsap.from(".hero h1", { y: 50, opacity: 0, duration: 1, delay: 0.3 });
gsap.from(".hero p", { y: 50, opacity: 0, duration: 1, delay: 0.6 });
gsap.from(".search-box", { scale: 0.8, opacity: 0, duration: 1, delay: 0.9 });

gsap.from(".card", {
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.3,
  scrollTrigger: {
    trigger: ".steps",
    start: "top 80%",
    scrub: 1,
  }
});

