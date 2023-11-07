let callback = (_: string[][]) => {};
let docs = [] as string[][];
let lemMap = {} as {[key: string]: string};
let stopwords = {} as {[key: string]: boolean};

export function execCallback() {
    callback(docs.
        map(doc => doc.
            map(word => {
                word = word.replace(/[,\.]/g, "").toLowerCase();
                return lemMap[word] ? lemMap[word] : word
            }).
            filter(word => !stopwords[word])));
}

export function setCallback(c: (docs: string[][]) => void) {
    callback = c;
}

export function setDocs(d: string[][]) {
    docs = d;
}

export function setLemmatizationMap(lm: any) {
    lemMap = lm;
}

export function setStopwords(sw: {[key: string]: boolean}) {
    stopwords = sw;
}
