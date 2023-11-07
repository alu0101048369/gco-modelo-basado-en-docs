import { Results } from "../../../logic/common/types";
import { setSimilarityTableData } from "../similarity_table";
import { setTermsTableData } from "../terms_table";

const docList = document.getElementById("list-docs") as HTMLParagraphElement;

export function newDocList(r: Results) {
    const docIndexLengthInChars = String(r.docTerms.length).length;
    r.docTerms.forEach(docTerms => {
        const btn = document.createElement("button");
        btn.classList.add("btn", "btn-primary", "font-monospace", "m-1");
        btn.innerText = String(docTerms.docIndex+1).padStart(docIndexLengthInChars, "0");
        btn.addEventListener("click", () => {
            setTermsTableData(docTerms.terms);
            setSimilarityTableData(r.simCalc.calculateSims(docTerms.docIndex));
        });
        docList.appendChild(btn);
    });
}
