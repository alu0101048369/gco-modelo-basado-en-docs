import { DocTerms, Term } from "../../../logic/common/doc_terms";

export function newTermsTable(data: DocTerms): HTMLDivElement {
    const parent = document.createElement("div");
    parent.classList.add("col-12", "table-responsive");
    parent.appendChild(newTitle(data.docIndex));
    parent.appendChild(newTable(data.terms));
    return parent;
}

function newTitle(index: number): HTMLHeadingElement {
    const title = document.createElement("h3");
    title.innerText = `Documento ${index}`;
    return title;
}

function newTable(terms: Term[]): HTMLTableElement {
    const table = document.createElement("table");
    table.classList.add("border-secondary", "table", "table-bordered", "text-center");
    table.appendChild(newTableHeader(["Índice", "Término", "TF", "IDF", "TF-IDF"]));
    table.appendChild(newTableBody(terms));
    return table;
}

function newTableHeader(fields: string[]): HTMLTableSectionElement {
    const thead = document.createElement("thead");
    fields.forEach(str => {
        const th = document.createElement("th");
        th.innerText = str;
        thead.appendChild(th);
    });
    return thead;
}

function newTableBody(terms: Term[]): HTMLTableSectionElement {
    const tbody = document.createElement("tbody");
    terms.forEach(term => {
        const tr = document.createElement("tr");
        newTableRowContent(term).forEach(t => {
            tr.appendChild(t);
        });
        tbody.appendChild(tr);
    });
    return tbody;
}

function newTableRowContent(term: Term): HTMLTableCellElement[] {
    const content = [] as HTMLTableCellElement[];

    const index = document.createElement("th");
    index.innerText = String(term.index+1);
    content.push(index);

    const value = document.createElement("td");
    value.innerText = term.value;
    content.push(value);

    const tf = document.createElement("td");
    tf.innerText = String(term.tf);
    content.push(tf);

    const idf = document.createElement("td");
    idf.innerText = String(term.idf);
    content.push(idf);

    const tfIdf = document.createElement("td");
    tfIdf.innerText = String(term.tfIdf);
    content.push(tfIdf);

    return content;
}
