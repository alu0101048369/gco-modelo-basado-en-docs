export interface DocTerms {
    docIndex: number;
    terms: Term[];
}

export interface Term {
    index: number;
    value: string;
    tf: number;
    idf: number;
    tfIdf: number;
}
