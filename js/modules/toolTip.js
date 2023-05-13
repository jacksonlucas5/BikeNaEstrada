export function initToolTip() {
  const toolTip = document.querySelectorAll('[data-tooltip="mapa"]');


  function onMouseOver(event) {
    const toolTip = createToolTip(this);

    function onMouseLeave() {
      toolTip.remove();
    }
    this.addEventListener("mouseleave", onMouseLeave);

    function onMouseMove(event) {
      toolTip.style.top = event.pageY + 20 + "px";
      toolTip.style.left = event.pageX + 20 + "px";
      if (parseInt(toolTip.style.left) > 280) {
        toolTip.style.left = event.pageX - 160 + "px";
      }
    }
    this.addEventListener("mousemove", onMouseMove);
  }

  function createToolTip(element) {
    const tool = document.createElement("div");
    const ariaLabel = element.getAttribute("aria-label");
    tool.innerText = ariaLabel;
    tool.classList.add("tool-Tip");
    document.body.appendChild(tool);
    return tool;
  }

  toolTip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
}
