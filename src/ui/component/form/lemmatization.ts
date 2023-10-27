import { execCallback, setLemmatizationMap } from "./process";

const inputFile = document.getElementById("fileLemma")! as HTMLInputElement;
inputFile.addEventListener("change", async () => {
    const file = inputFile.files!.item(0);
    if (file) {
        setLemmatizationMap(JSON.parse(await file.text()));
        execCallback();
    }
});
