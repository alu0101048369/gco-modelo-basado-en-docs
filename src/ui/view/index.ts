import { hideInput, viewInput } from "./input";
import { viewOutput } from "./output";

const main = document.getElementsByTagName("main")[0];

export function switchView() {
    hideInput(main);
    viewOutput(main);
}

viewInput().then(_ => {
    // Process data
    switchView();
});
