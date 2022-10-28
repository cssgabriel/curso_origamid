export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");
    if(sections){
        const windowPoint = window.innerHeight * 0.8;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowPoint) < 0;
                if(isSectionVisible) {
                    section.classList.add("ativo");
                } else if(section.classList.contains("ativo")) {
                    section.classList.remove("ativo");
                }
            });
        }

        animaScroll();
        window.addEventListener("scroll", animaScroll);
    }
}
