import SoftScroll from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new SoftScroll("[data-menu='suave'] a[href^='#']");
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

initAnimationScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitoin();
