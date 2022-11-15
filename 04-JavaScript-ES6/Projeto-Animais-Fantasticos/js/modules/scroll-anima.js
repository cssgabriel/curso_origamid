export default class ScrollAnima {
    cosntructor(sections) {
        this.sections = document.querySelectorAll(sections);
        this.windowPoint = window.innerHeight * 0.8;
        this.animaScroll = this.animaScroll.bind(this);
    }

    animaScroll() {
        this.sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - this.windowPoint) < 0;
            if (isSectionVisible) {
                section.classList.add("ativo");
            } else if (section.classList.contains("ativo")) {
                section.classList.remove("ativo");
            }
        });
    }

    init() {
        this.animaScroll();
        window.addEventListener("scroll", this.animaScroll);
        return this;
    }
}
