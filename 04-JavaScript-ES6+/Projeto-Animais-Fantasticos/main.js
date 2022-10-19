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

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if(accordionList) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);


        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        });
    }
}

initAccordion();