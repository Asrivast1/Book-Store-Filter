const btns = document.querySelectorAll('.menuBtn');
const menuItems = document.querySelectorAll('.menuItem');
let main_menu = "todayShelf";
showMenu(main_menu);


btns.forEach((btn)=>{
    btn.addEventListener('click', function(){
        showMenu(btn.id);
    })
})

function showMenu(newMenu){
    activeId = newMenu;
    menuItems.forEach((menu)=>{
        if(menu.classList.contains(activeId)){
            menu.style.display = 'flex';
        }else{
            menu.style.display = 'none';
        }
    })
}
