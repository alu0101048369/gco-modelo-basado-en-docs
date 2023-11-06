import { Results } from "../../../logic/common/types";
import { newSimilarityTable } from "../../component/similarity_table";
import { newTermsTable } from "../../component/terms_table";

export function viewOutput(mainElement: HTMLElement, r: Results) {
    document.body.classList.remove("align-items-center", "vh-100");
    document.body.classList.add("p-3");
    mainElement.classList.remove("mw-500");

    const container = mainElement.children[1] as HTMLElement;
    populate(container, r);
    container.classList.remove("d-none");
}

function populate(container: HTMLElement, r: Results) {
    r.docTerms.forEach(terms => {
        container.appendChild(newTermsTable(terms));
    });
    container.appendChild(newSimilarityTable(r.similarities));
}
