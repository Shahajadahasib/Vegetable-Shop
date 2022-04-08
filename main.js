var typed = new Typed(".typing", {
    strings: ["Drinks", "Dry Foods", "Vegetables", "Groceries", "Medicines"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

window.addEventListener("scroll", function() {
        var nav = document.getElementById("nav");
        nav.classList.toggle("sticky", window.scrollY > 0)


    }

)