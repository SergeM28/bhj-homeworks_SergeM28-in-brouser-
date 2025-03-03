const menuElements = document.querySelectorAll("ul.menu_main  li");
const sumElements = menuElements.length;

for (let i = 0; i < sumElements; i++) {
    menuElements.item(i).addEventListener("click", function(event) { 
        let activeMenu = document.querySelector(".menu_active");
        let subMenuItem = this.querySelector("ul.menu_sub");   
        if (!event.target.getAttribute("href")) {
            event.preventDefault();
       }           
        if (subMenuItem === activeMenu && activeMenu) {
            activeMenu.classList.remove("menu_active");
            return;
        }       
        if (subMenuItem) {          
            if (activeMenu) {
                activeMenu.classList.remove("menu_active");          
            }
            subMenuItem.classList.add("menu_active");
            return;
        }
        return;
    });
}