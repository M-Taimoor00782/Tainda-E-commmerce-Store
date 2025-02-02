let menuBar = document.querySelector(".menu-bar");
let navBar = document.querySelector(".navbar");
let cross = document.querySelector(".cross")
let backTop = document.querySelector(".back-top");

// for Navbar
menuBar.addEventListener("click", () => {
    navBar.style.right = "0px";
});

cross.addEventListener("click", () => {
    navBar.style.right = "-700px";
});

// shop page
document.addEventListener("DOMContentLoaded", () => {
    const box1Product = document.getElementById("product-box1");
    const box2Product = document.getElementById("product-box2");
    const box3Product = document.getElementById("product-box3");
    const box4Product = document.getElementById("product-box4");

    if (box1Product) {
        box1Product.addEventListener("click", () => {
            // console.log("Product clicked: Cartoon Astronaut T-shirt");
            window.location.href = "/shop/product1.html";
        });
    }

    if (box2Product) {
        box2Product.addEventListener("click", () => {
            window.location.href = "/shop/product2.html";
        });
    }

    if (box3Product) {
        box3Product.addEventListener("click", () => {
            window.location.href = "/shop/product3.html";
        });
    }
    if (box4Product) {
        box4Product.addEventListener("click", () => {
            window.location.href = "/shop/product4.html";
        });
    }
});


this.addEventListener("scroll", () => {
    if (scrollY > 200){
        backTop.style.display = "flex";
    }
    else{
        backTop.style.display = "none";
    }
});

backTop.addEventListener("click", () => {
    this.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});



// Scroll Reveal

const sr = ScrollReveal({
    distance: '80px',
    duration: 2500,
    delay: 400,
    opacity: 0,
    interval: 0,
    reset: true
})

sr.reveal(`.headig1, .para-2`, {
    origin: 'bottom',
    easing: 'ease',
    delay: 700
});

sr.reveal(`.headig2, .para-1`, {
    origin: 'bottom',
    delay: 500,
    easing: 'ease'
});

sr.reveal(`.headig3, .text-teenda`, {
    origin: 'bottom',
    easing: 'ease'
});

sr.reveal(`.para1, .para-3`, {
    origin: 'bottom',
    easing: 'ease',
    delay: 900
});

sr.reveal(`.btn`, {
    origin: 'bottom',
    easing: 'ease',
    delay: 1000
});

sr.reveal(`.feature-img, .blog-img`, {
    origin: 'top',
    easing: 'ease',
    interval: 100
});

sr.reveal(`.feature-text`, {
    origin: 'bottom',
    easing: 'ease',
    delay: 600,
    interval: 100
});

sr.reveal(`.product-box`, {
    opacity: 0,
    interval: 100,
    scale: 0.85,
    delay: 300
});

sr.reveal(`.banner-box, .sales-box, .headig, .cart-img, .headig-4, .about-img, .coupon-apply, .loction, .icon-1`, {
    origin: "left",
    interval: 100,
    easing: 'ease'
});

sr.reveal(`.banner-box2, .sales-box3, .form, .cart-content, .headig-2, .line, .cart-total`, {
    origin: "right",
    interval: 100,
    easing: 'ease'
});

