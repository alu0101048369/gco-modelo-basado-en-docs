import { SimilarityCalculator } from "../metric/Similarity";

export interface Results {
    docTerms: DocTerms[];
    simCalc: SimilarityCalculator;
}

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

export interface Similarity {
    docs: [number, number];
    value: number;
}
