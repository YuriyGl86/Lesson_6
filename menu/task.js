const menuLinks = document.querySelectorAll('.menu__link')
const menuLinksArray = Array.from(menuLinks)
let menuOpenFlag;

menuLinksArray.forEach(link => {
    link.addEventListener('click', linkHandler)
})

function linkHandler(event){
    const subMenu = event.target.nextElementSibling
    if(subMenu && subMenu.matches('ul.menu_sub')){
        event.preventDefault()
        console.log('даааа')
        if(menuOpenFlag && menuOpenFlag != subMenu){
            menuOpenFlag.classList.remove('menu_active')
            menuOpenFlag = subMenu            
        } else if (menuOpenFlag == subMenu){
            menuOpenFlag = false
        } else if(!menuOpenFlag){
            menuOpenFlag = subMenu
        }
        
        subMenu.classList.toggle('menu_active')
    }
}