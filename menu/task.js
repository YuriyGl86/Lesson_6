const menuLinks = document.querySelectorAll('.menu__link')
const menuLinksArray = Array.from(menuLinks)
let menuOpenFlags = {};  

menuLinksArray.forEach(link => {
    link.addEventListener('click', linkHandler)
})

function linkHandler(event){
    const subMenu = event.target.nextElementSibling
    const menuFlagkey = event.target.closest('ul.menu_main').classList.value // на случай если на странице более 1 навигацинное меню
    
    if(subMenu && subMenu.matches('ul.menu_sub')){
        event.preventDefault()
        console.log('даааа')
        if(menuOpenFlags[menuFlagkey] && menuOpenFlags[menuFlagkey] != subMenu){  //случай мы открываем другое меню
            menuOpenFlags[menuFlagkey].classList.remove('menu_active')
            menuOpenFlags[menuFlagkey] = subMenu            
        } else if (menuOpenFlags[menuFlagkey] == subMenu){  //случай мы закрываем тоже самое уже открытое меню
            menuOpenFlags[menuFlagkey] = false
        } else if(!menuOpenFlags[menuFlagkey]){  //случай все меню закрыты
            menuOpenFlags[menuFlagkey] = subMenu
        }
        
        subMenu.classList.toggle('menu_active')
    }
}