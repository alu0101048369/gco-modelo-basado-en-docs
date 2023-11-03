import { Similarity } from "../../../logic/common/types";

export function newSimilarityTable(sims: Similarity[]): HTMLDivElement {
    const parent = document.createElement("div");
    parent.classList.add("col-12", "table-responsive");
    parent.appendChild(newTitle());
    parent.appendChild(newTable(sims));
    return parent;
}

function newTitle(): HTMLHeadingElement {
    const title = document.createElement("h3");
    title.innerText = "Tabla de similaridad";
    return title;
}

function newTable(sims: Similarity[]): HTMLTableElement {
    const table = document.createElement("table");
    table.classList.add("border-secondary", "table", "table-bordered", "text-center");
    table.appendChild(newTableHeader());
    table.appendChild(newTableBody(sims));
    return table;
}

function newTableHeader(): HTMLTableSectionElement {
    const thead = document.createElement("thead");
    
    const indexTH = document.createElement("th");
    indexTH.innerText = "Índices";
    indexTH.colSpan = 2;
    thead.appendChild(indexTH);

    const similarityTH = document.createElement("th");
    similarityTH.innerText = "Similaridad";
    thead.appendChild(similarityTH);

    return thead;
}

function newTableBody(sims: Similarity[]): HTMLTableSectionElement {
    const tbody = document.createElement("tbody");
    sims.sort((a, b) => {
        const firstComp = a.docs[0] - b.docs[0];
        return firstComp !== 0 ? firstComp : a.docs[1] - b.docs[1];
    }).forEach(sim => {
        const tr = document.createElement("tr");
        newTableRowContent(sim).forEach(t => {
            tr.appendChild(t);
        });
        tbody.appendChild(tr);
    });
    return tbody;
}

function newTableRowContent(sim: Similarity): HTMLTableCellElement[] {
    const content = [] as HTMLTableCellElement[];

    const indexDoc1 = document.createElement("th");
    indexDoc1.innerText = String(sim.docs[0]+1);
    content.push(indexDoc1);

    const indexDoc2 = document.createElement("th");
    indexDoc2.innerText = String(sim.docs[1]+1);
    content.push(indexDoc2);

    const value = document.createElement("td");
    value.innerText = String(sim.value);
    content.push(value);

    return content;
}
