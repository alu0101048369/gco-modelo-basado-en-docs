export function viewOutput(mainElement: HTMLElement) {
    document.body.classList.remove("align-items-center", "vh-100");
    document.body.classList.add("p-3");
    mainElement.classList.remove("mw-500");
    mainElement.children[1].classList.remove("d-none");
}
