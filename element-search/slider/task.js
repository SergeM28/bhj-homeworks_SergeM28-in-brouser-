const imgElms = document.querySelectorAll(".slider__item");
const sumOfSlides = imgElms.length;
const leftBtn = document.querySelector(".slider__arrow_prev");
const rightBtn = document.querySelector(".slider__arrow_next");

let activeSlideItem = 0;

function switchActiveSlide(activeSlideItem) {
    let activeSlide = document.querySelector(".slider__item_active");
    activeSlide.classList.remove("slider__item_active");
    imgElms.item(activeSlideItem).classList.add("slider__item_active");
}

leftBtn.addEventListener("click", function(){
    activeSlideItem--;
    if (activeSlideItem < 0) {
        activeSlideItem = sumOfSlides - 1;
    }
    switchActiveSlide(activeSlideItem);
    return activeSlideItem;
}); 

rightBtn.addEventListener("click", function(){
    activeSlideItem++;
    if (activeSlideItem === sumOfSlides) {
        activeSlideItem = 0;
    }
    switchActiveSlide(activeSlideItem);
    return activeSlideItem;
});


