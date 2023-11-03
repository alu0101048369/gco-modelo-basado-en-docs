import "./docs";
import "./stopwords";
import "./lemmatization";
import { setCallback } from "./process";

export function newForm(): Promise<string[][]> {
    return new Promise(resolve => {
        setCallback(resolve);
    });
}
