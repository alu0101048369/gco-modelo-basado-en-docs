import { Results } from "./common/types";
import { DF } from "./metric/DF";
import { IDF } from "./metric/IDF";
import { TF } from "./metric/TF";
import { TF_IDF } from "./metric/TFIDF";

export function calculate(docs:string[][]) : Results {
  const df = DF(docs)
  const doc_terms = docs.map((doc, index) => { 
    return {
      docIndex: index,
      terms: doc.map((term, i) => {
        const tf = TF(term, doc);
        return {
          index: i,
          value: term,
          tf,
          idf: IDF(docs.length, df[term]),
          tfidf: TF_IDF(tf)
        }
      })
    }
  });
  
}