const element = [...document.querySelectorAll(".element")];
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");


let calc = element[0].getBoundingClientRect().width;

element.forEach(function(item, i){
    item.style.left = i * calc + "px"
})


next.addEventListener("click", function(){
    const sliderElement = document.querySelector(".slider_element");
    const curentCard = sliderElement.querySelector(".active");
    const nextSibling = curentCard.nextElementSibling;
    const amountToMove = nextSibling.style.left;
    
    
    
    sliderElement.style.transform = `translateX(-${amountToMove})`;

    curentCard.classList.remove("active");
    nextSibling.classList.add("active");
})




prev.addEventListener("click", function(){
    const sliderElement = document.querySelector(".slider_element");
    const curentCard = sliderElement.querySelector(".active");
    const prevSibling = curentCard.previousElementSibling;
    const amountToMove = prevSibling.style.left;

   
    sliderElement.style.transform = `translateX(-${amountToMove})`;


    curentCard.classList.remove("active");
    prevSibling.classList.add("active");

    
    
})


element.forEach(function(item, i){

    item.addEventListener("click", function(){
           
           item.classList.replace("element", "full_photo")
        
    })

})