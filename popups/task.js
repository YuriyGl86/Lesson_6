setTimeout(() => document.querySelector('#modal_main').classList.add('modal_active'),1000)

const close = document.querySelectorAll('.modal__close')
const closeArray = Array.from(close)

closeArray.forEach(elem => {
    elem.addEventListener('click', closeHandler)
});

function closeHandler(event){
    event.target.closest('.modal').classList.remove('modal_active')
}

document.querySelector('.show-success').addEventListener('click', showSuccessHandler)

function showSuccessHandler(){
    document.querySelector('#modal_success').classList.add('modal_active')
}