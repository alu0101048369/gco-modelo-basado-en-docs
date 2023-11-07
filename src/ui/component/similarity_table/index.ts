import { Similarity } from "../../../logic/common/types";

const tbody = document.getElementById("table-similarity") as HTMLTableSectionElement;

export function setSimilarityTableData(sims: Similarity[]) {
    tbody.innerHTML = "";
    sims.forEach(sim => {
        const tr = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = String(sim.docs[1]+1);
        tr.appendChild(th);

        const td = document.createElement("td");
        td.innerText = sim.value.toFixed(5);
        tr.appendChild(td);

        tbody.appendChild(tr);
    });
}
