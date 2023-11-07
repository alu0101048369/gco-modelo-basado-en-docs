import { Term } from "../../../logic/common/types";

const tbody = document.getElementById("table-terms") as HTMLTableSectionElement;

export function setTermsTableData(terms: Term[]) {
    tbody.innerHTML = "";
    terms.forEach(term => {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = String(term.index+1);
        tr.appendChild(th);

        const tdValue = document.createElement("td");
        tdValue.innerText = term.value;
        tr.appendChild(tdValue);

        const tdTf = document.createElement("td");
        tdTf.innerText = String(term.tf);
        tr.appendChild(tdTf);

        const tdIdf = document.createElement("td");
        tdIdf.innerText = String(term.idf);
        tr.appendChild(tdIdf);

        const tdTfIdf = document.createElement("td");
        tdTfIdf.innerText = String(term.tfIdf);
        tr.appendChild(tdTfIdf);

        tbody.appendChild(tr);
    });
}
