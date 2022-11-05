export default class Modal {
    constructor(btnAbrir, btnFechar, container) {
        this.btnAbrir = document.querySelector(btnAbrir);
        this.btnFechar = document.querySelector(btnFechar);
        this.container = document.querySelector(container);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    toggleModal() {
        this.container.classList.toggle("ativo");
    }

    eventToggleModal(event) {
        event.preventDefault();
        this.toggleModal();
    }

    cliqueForaModal(event) {
        if (event.target === this.container) {
            this.toggleModal();
        }
    }

    addModalEvents() {
        this.btnAbrir.addEventListener("click", this.eventToggleModal);
        this.btnFechar.addEventListener("click", this.eventToggleModal);
        this.container.addEventListener("click", this.cliqueForaModal);
    }

    init() {
        if (this.btnAbrir && this.btnFechar && this.container) {
            this.addModalEvents();
        }
    }
}
