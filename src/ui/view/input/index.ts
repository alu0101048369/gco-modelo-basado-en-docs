import { newForm } from "../../component/form";

export function viewInput(): Promise<string[][]> {
    return newForm();
}

export function hideInput(mainElement: HTMLElement) {
    mainElement.children[0].classList.add("d-none");
}
