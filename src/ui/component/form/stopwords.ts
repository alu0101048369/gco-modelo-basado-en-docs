import { nextStep } from "./stepper";
import { setStopwords } from "./process";

const inputFile = document.getElementById("fileStopwords")! as HTMLInputElement;
inputFile.addEventListener("change", async () => {
    const file = inputFile.files!.item(0);
    if (file) {
        setStopwords(parse(await file.text()));
        nextStep();
    }
});

function parse(txt: string): {[key: string]: boolean} {
    return txt.split("\n").map(line => line.trim()).filter(word => word.length !== 0).reduce((acc, val) => {
        acc[val] = true;
        return acc;
    }, {} as {[key: string]: boolean});
}
