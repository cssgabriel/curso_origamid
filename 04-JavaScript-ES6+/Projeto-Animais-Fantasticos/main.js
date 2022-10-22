function initTabNav() {
        
    const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
    const tabContent = document.querySelectorAll("[data-tab='content'] section");

    if(tabMenu && tabContent) {
        tabContent[0].classList.add("ativo");

        function activeTab(i) {
            tabContent.forEach(section => {
                section.classList.remove("ativo");
            });

            const direction = tabContent[i].dataset.anime;
            tabContent[i].classList.add("ativo", direction);
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
    const accordionList = document.querySelectorAll("[data-anime='accordion'] dt");
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

function initSoftScroll() {

    const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");
    if(linksInternos){
        function scrollToSection(event) {
            event.preventDefault();
            const href = event.currentTarget.getAttribute("href");
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        linksInternos.forEach((link) => {
            link.addEventListener("click", scrollToSection);
        });
    }
}

initSoftScroll();

function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");

    if(sections){
        const windowPoint = window.innerHeight * 0.8;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowPoint) < 0;
                if(isSectionVisible) {
                    section.classList.add("ativo");
                }
            });
        }
    }
}

initAnimationScroll();

window.addEventListener("scroll", initAnimationScroll);