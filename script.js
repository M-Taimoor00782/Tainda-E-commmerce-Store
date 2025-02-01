let menuBar = document.querySelector(".menu-bar");
let navBar = document.querySelector(".navbar");
let cross = document.querySelector(".cross")

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


