import { Results } from "../../../logic/common/types";
import { newDocList } from "../../component/doclist";

export function viewOutput(mainElement: HTMLElement, r: Results) {
    document.body.classList.remove("align-items-center", "vh-100");
    document.body.classList.add("p-3");
    mainElement.classList.remove("mw-500");
    newDocList(r);
    mainElement.children[1].classList.remove("d-none");
}
