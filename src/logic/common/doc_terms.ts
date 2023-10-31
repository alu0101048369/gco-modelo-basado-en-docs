export interface DocTerms {
    // Index of the document that contains these terms
    docIndex: number;
    // List of terms and their properties
    terms: Term[];
}

export interface Term {
    index: number;
    value: string;
    tf: number;
    idf: number;
    tfIdf: number;
}
