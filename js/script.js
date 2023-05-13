import initOrcamento from "./modules/orcamento.js";
initOrcamento();

import initToolTip from "./modules/toolTip.js";
initToolTip();

import AccordionList from "./modules/accordionList.js";

import iniGaleria from "./modules/galeria.js";
iniGaleria();

import Scroll from "./modules/animacao.scroll.js";

const initAccordionList = new AccordionList(".perguntas-frequentes dt");
initAccordionList.init();

const initAnimaScroll = new Scroll(".anime");
initAnimaScroll.init();
