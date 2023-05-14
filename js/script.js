import initOrcamento from "./modules/orcamento.js";
import Tooltip from "./modules/toolTip.js";
import AccordionList from "./modules/accordionList.js";
import iniGaleria from "./modules/galeria.js";
import Scroll from "./modules/animacao.scroll.js";

const initAccordionList = new AccordionList(
  ".perguntas-frequentes dt",
  "ativo"
);
initAccordionList.init();

const initAnimaScroll = new Scroll(".anime");
initAnimaScroll.init();

const initToolTip = new Tooltip('[data-tooltip="mapa"]');
initToolTip.init();

initOrcamento();
iniGaleria();
