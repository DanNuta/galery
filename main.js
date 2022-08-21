const element = [...document.querySelectorAll(".element")];
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


let calc = 700/ 3;
const slideLength = element.length -1;
let counterSlider = 0;
let counterSliderElement = 2;
let counterEl = 2;




element.forEach(function(item, i){
    item.style.left = i * calc + "px"
})




let counter = calc;

next.addEventListener("click", function(){

    const sliderElement = document.querySelector(".slider_element");
    

    sliderElement.style.transform = `translateX(-${counter}px)`;


   activeCard.classList.remove("active");
   sibling.classList.add("active")

   counter = counter + calc
    
   
})


let counterStart = calc
prev.addEventListener("click", function(){

    const sliderElement = document.querySelector(".slider_element");
    counterStart = counterStart - calc

    sliderElement.style.transform = `translateX(${counterStart}px)`;
    







    

    counterEl++


    
    
    element[counterSliderElement].classList.add("active");
   
    

})