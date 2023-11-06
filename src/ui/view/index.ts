import { Results } from "../../logic/common/types";
import { calculate } from "../../logic/function";
import { hideInput, viewInput } from "./input";
import { viewOutput } from "./output";

const main = document.getElementsByTagName("main")[0];

export function switchView(r: Results) {
    hideInput(main);
    viewOutput(main, r);
}

viewInput().then(data => {
    console.log("Data parsed. Processing...");
    const outData = calculate(data);
    console.log("Data processed. Drawing on the UI...");
    switchView(outData);
});
