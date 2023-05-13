import initOrcamento from "./modules/orcamento.js";
initOrcamento();

import initToolTip from "./modules/toolTip.js";
initToolTip();

import AccordionList from "./modules/accordionList.js";

import iniGaleria from "./modules/galeria.js";
iniGaleria();

import initScroll from "./modules/animacao.scroll.js";
initScroll();

const initAccordionList = new AccordionList(".perguntas-frequentes dt");
initAccordionList.init();
