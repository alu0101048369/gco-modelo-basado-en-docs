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
    switchView(calculate(data));
});
