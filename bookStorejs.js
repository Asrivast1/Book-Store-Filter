const btns = document.querySelectorAll('.menuBtn');
const menuItems = document.querySelectorAll('.menuItem');
const navbarIcon = document.getElementById('navbarIcon');
const navbar_Nav = document.getElementById('navbarNav');


let main_menu = document.getElementById('todayShelf');
showMenu(main_menu);


btns.forEach((btn)=>{
    btn.addEventListener('click', function(){
        showMenu(btn);
    })
})

function showMenu(newMenu){
    activeId = newMenu.id;
    menuItems.forEach((menu)=>{
        if(menu.classList.contains(activeId)){
            menu.style.display = 'flex';
        }else{
            menu.style.display = 'none';
        }
    })
}

const searchInput = document.getElementById('searchInput');
const bookList = document.querySelectorAll('.bookTitle');
searchInput.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    for(let i= 0 ; i< bookList.length ; i++){
        if(bookList[i].innerText.toLowerCase().includes(searchString)){
           bookList[i].parentNode.parentNode.style.display = 'flex';
        }else{
            bookList[i].parentNode.parentNode.style.display = 'none';
        };
    };
});


