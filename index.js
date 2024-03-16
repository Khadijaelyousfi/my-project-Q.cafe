let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
};
window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
};


const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
})

animate.reveal(".nav");
animate.reveal(".home-text", {origin:"left"});
animate.reveal(".home-img", {origin:"botton"});
animate.reveal(".ser-box, .product-box, .team-box, .book-data", {
    interval:"100"
});