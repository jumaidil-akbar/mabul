const navbar = document.querySelector(".fixed-top");

window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add("scroll-nav-active");
    } else {
        navbar.classList.remove("scroll-nav-active");
    }
};
