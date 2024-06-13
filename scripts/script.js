const mainBlock = document.getElementsByClassName('main_conteiner')[0];
const humburgerMenu = document.getElementsByClassName('humburger_menu')[0];
const humburgerMenuClose = document.getElementsByClassName('humburger_menu_close')[0];
const humburgerMenuOpen = document.getElementsByClassName('humburger_menu_open')[0];
const asideBar = document.getElementsByClassName('aside')[0];

humburgerMenu.addEventListener('click', () => {
    mainBlock.classList.toggle('active');
    humburgerMenuClose.classList.toggle('disactive');
    humburgerMenuOpen.classList.toggle('disactive');
    for(let i = 0; i < asideBar.children.length; i++){
        asideBar.children[i].children[1].classList.toggle('disactive');
    }
})