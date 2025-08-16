let menubtn = document.querySelector(".menu");
let navlink = document.querySelector(".navlinks");
let navlinks = document.querySelectorAll(".navlinks a");


menubtn.addEventListener('click', () => {
    navlink.classList.remove('hidden');
    navlink.classList.toggle('mobile-screen');
    menubtn.classList.toggle('active');
    navlink.classList.toggle('flex');
    navlink.classList.toggle('flex-col');
})

// Close menu when a nav link is clicked
navlinks.forEach(link => {
    link.addEventListener('click', () => {
        navlink.classList.toggle('hidden');
        navlink.classList.remove('mobile-screen');
        menubtn.classList.remove('active');
    });
});

 var typed = new Typed("#typing", {
    strings: [" Trace. Track. Transform."
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });