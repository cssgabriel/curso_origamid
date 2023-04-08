import Timeout from "./Timeout.js";
export default class Slide {
    container;
    slides;
    controls;
    time;
    slideActive;
    index;
    timeout;
    pausedTimeout;
    paused;
    thumbItems;
    thumbActive;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.timeout = null;
        this.pausedTimeout = null;
        this.index = localStorage.getItem("activeSlide")
            ? Number(localStorage.getItem("activeSlide"))
            : 0;
        this.slideActive = this.slides[this.index];
        this.paused = false;
        this.thumbItems = null;
        this.thumbActive = null;
        this.init();
    }
    hide(el) {
        el.classList.remove("active");
        if (el instanceof HTMLVideoElement) {
            el.currentTime = 0;
            el.pause();
        }
    }
    show(index) {
        this.hide(this.slideActive);
        this.index = index;
        this.slides[index].classList.add("active");
        localStorage.setItem("activeSlide", String(this.index));
        if (this.thumbItems) {
            this.thumbActive?.classList.remove("active");
            this.thumbActive = this.thumbItems[this.index];
            this.thumbActive.classList.add("active");
        }
        this.slideActive = this.slides[index];
        if (this.slideActive instanceof HTMLVideoElement) {
            this.autoVideo(this.slideActive);
        }
        else {
            this.auto(this.time);
        }
    }
    autoVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener("playing", () => {
            if (firstPlay)
                this.auto(video.duration * 1000);
            firstPlay = false;
        });
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumbActive)
            this.thumbActive.style.animationDuration = `${time}ms`;
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        document.body.classList.add("paused");
        this.pausedTimeout = new Timeout(() => {
            this.paused = true;
            this.thumbActive?.classList.add("paused");
            if (this.slideActive instanceof HTMLVideoElement)
                this.slideActive.pause();
        }, 300);
    }
    continue() {
        document.body.classList.remove("paused");
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
            this.thumbActive?.classList.remove("paused");
            if (this.slideActive instanceof HTMLVideoElement)
                this.slideActive.play();
        }
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Slide Anterior";
        nextButton.innerText = "Slide Anterior";
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        this.controls.addEventListener("pointerdown", () => this.pause());
        document.addEventListener("pointerup", () => this.continue());
        document.addEventListener("touchend", () => this.continue());
        nextButton.addEventListener("pointerup", () => this.next());
        prevButton.addEventListener("pointerup", () => this.prev());
    }
    addThumbItems() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        for (let i = 0; i < this.slides.length; i++) {
            thumbContainer.innerHTML += `<span><span class="thumb-item"></span></span>`;
        }
        this.controls.appendChild(thumbContainer);
        this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
    }
    init() {
        this.addControls();
        this.addThumbItems();
        this.show(this.index);
    }
}
