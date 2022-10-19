function initTabNav() {
        
    const tabMenu = document.querySelector(".js-tabmenu li");
    const tabContent = document.querySelector(".js-tabcontent section");

    if(tabMenu && tabContent) {
        tabContent[0].classList.add("ativo");

        function activeTab(i) {
            tabContent.forEach(section => {
                section.classList.remove("ativo");
            });

            tabContent[i].classList.add("ativo");
        }

        tabMenu.forEach((itemMenu, i) => {
            itemMenu.addEventListener("click", () => {
                activeTab(i);
            });
        });
    }
}

initTabNav();