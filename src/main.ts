import { recomendation } from "./logic/function";
import { parseFile } from "./logic/input/parse/file";
import { newForm } from "./ui/component/form";

async function main() {
    const vars = await newForm();

    let scores;
    try {
        scores = parseFile(vars.file);
    } catch (e) {
        if (typeof e === "object" && e !== null && "message" in e) {
            e = e.message;
        }
        alert(`file format error: ${e}`);
        location.reload();
        return;
    }

    console.log(recomendation(scores.normValues, vars.metric, vars.prediction));
}

main();