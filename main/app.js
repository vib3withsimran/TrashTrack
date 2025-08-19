let menubtn = document.querySelector(".menu");
let navlink = document.querySelector(".navlinks");
let navlinks = document.querySelectorAll(".navlinks a");


menubtn.addEventListener('click', () => {
    navlink.classList.remove('hidden');
    navlink.classList.toggle('mobile-screen');
    menubtn.classList.toggle('active');
})

// Close menu when a nav link is clicked
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlink.classList.toggle('hidden');
        navlink.classList.remove('mobile-screen');
        menubtn.classList.remove('active');
    });
});
function showFlash(message, type = "success") {
    const flash = document.createElement("div");
    flash.className = `flash ${type}`;
    flash.textContent = message;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 3000);
}


