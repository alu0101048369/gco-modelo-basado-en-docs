import { nextStep } from "./stepper";
import { setDocs } from "./process";

const inputFile = document.getElementById("fileDocs")! as HTMLInputElement;
inputFile.addEventListener("change", async () => {
    const file = inputFile.files!.item(0);
    if (file) {
        setDocs(parse(await file.text()));
        nextStep();
    }
});

function parse(txt: string): string[][] {
    return txt.
        replace(/\r/g, "").
        split("\n").
        map(line => line.
            trim().
            split(/\s+/).
            filter(word => word.length !== 0)).
        filter(line => line.length !== 0);
}
