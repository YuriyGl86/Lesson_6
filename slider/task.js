const prevArrow = document.querySelector('.slider__arrow_prev')
const nextArrow = document.querySelector('.slider__arrow_next')
const slidList = document.querySelectorAll('.slider__item')
const dontList = document.querySelectorAll('.slider__dot')


prevArrow.addEventListener('click', handlePrev)
nextArrow.addEventListener('click', handleNext)

function handlePrev(event){
    let currentSlideActive = document.querySelector('.slider__item_active')
    let prevSlide = currentSlideActive.previousElementSibling
    
    if(!prevSlide){
        prevSlide = slidList[slidList.length -1]
    }

    prevSlide.classList.toggle('slider__item_active')
    currentSlideActive.classList.toggle('slider__item_active')
}


function handleNext(event){
    let currentSlideActive = document.querySelector('.slider__item_active')
    let nextSlide = currentSlideActive.nextElementSibling

    if(!nextSlide){
        nextSlide = slidList[0]
    }

    nextSlide.classList.toggle('slider__item_active')
    currentSlideActive.classList.toggle('slider__item_active')
}

for(let dot of dontList){
    dot.addEventListener('click', dotHandler)
}

function dotHandler(event){
    let currentSlideActive = document.querySelector('.slider__item_active')    
    let index = 0
    let dot = event.target

    while(dot.previousElementSibling){
        index++
        dot = dot.previousElementSibling
    }

    console.log(index)
    currentSlideActive.classList.toggle('slider__item_active')
    slidList[index].classList.toggle('slider__item_active')


}