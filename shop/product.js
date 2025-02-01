
// for product one page

const mainImg = document.querySelector("#main-f");
const smallImg = document.querySelectorAll(".sm-f");

let arr = Array.from(smallImg);
console.log(arr);
arr.forEach( () =>{
    smallImg[0].addEventListener("click", () =>{
        mainImg.src = "/assest/product/f1.jpg"
    });
    smallImg[1].addEventListener("click", () =>{
        mainImg.src = "/assest/product/f2.jpg";
    });
    smallImg[2].addEventListener("click", () =>{
        mainImg.src = "/assest/product/f3.jpg";
    });
    smallImg[3].addEventListener("click", () =>{
        mainImg.src = "/assest/product/f4.jpg";
    });
});

// for product two page

const mainImgA = document.querySelector("#main-a");
const smallImgA = document.querySelectorAll(".sm-a");

let arrA = Array.from(smallImgA);
arrA.forEach( () => {
    smallImgA[0].addEventListener("click", () =>{
        mainImgA.src = "/assest/product/a1.jpg";
    });

    smallImgA[1].addEventListener("click", () =>{
        mainImgA.src = "/assest/product/a2.jpg";
    });

    smallImgA[2].addEventListener("click", () =>{
        mainImgA.src = "/assest/product/a3.jpg";
    });

    smallImgA[3].addEventListener("click", () =>{
        mainImgA.src = "/assest/product/a4.jpg";
    });
});

// for product page 3

const mainImgN = document.querySelector("#main-n");
const smallImgN = document.querySelectorAll(".sm-n");

let arrN = Array.from(smallImgN);
arrN.forEach( () => {
    smallImgN[0].addEventListener("click", () =>{
        mainImgN.src = "/assest/product/n1.jpg";
    });

    smallImgN[1].addEventListener("click", () =>{
        mainImgN.src = "/assest/product/n2.jpg";
    })

    smallImgN[2].addEventListener("click", () =>{
        mainImgN.src = "/assest/product/n3.jpg";
    });

    smallImgN[3].addEventListener("click", () =>{
        mainImgN.src = "/assest/product/n4.jpg";
    });
});

// for product page 4

const mainImgFf = document.querySelector("#main-F");
const smallImgFf = document.querySelectorAll(".sm-F");

let arrFf = Array.from(smallImgFf);
arrFf.forEach( () => {
    smallImgFf[0].addEventListener("click", () =>{
        mainImgFf.src = "/assest/product/f5.jpg";
    });

    smallImgFf[1].addEventListener("click", () =>{
        mainImgFf.src = "/assest/product/f6.jpg";
    })

    smallImgFf[2].addEventListener("click", () =>{
        mainImgFf.src = "/assest/product/f7.jpg";
    });

    smallImgFf[3].addEventListener("click", () =>{
        mainImgFf.src = "/assest/product/f8.jpg";
    });
});
