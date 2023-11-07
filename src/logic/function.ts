import { DocTerms, Results } from "./common/types";
import { DF } from "./metric/DF";
import { IDF } from "./metric/IDF";
import { CalculateSimilarities } from "./metric/Similarity";
import { TF } from "./metric/TF";
import { TF_IDF } from "./metric/TFIDF";

export function calculate(docs: string[][]): Results {
  const df = DF(docs);
  const tf_all_docs = docs.map((doc) => {
    return TF(doc);
  });

  const similarities = CalculateSimilarities(docs, tf_all_docs);

  const docTerms: DocTerms[] = docs.map((doc, ind) => {
    const doc_terms = doc.filter((term, index) => doc.indexOf(term) === index);
    return {
      docIndex: ind,
      terms: doc_terms.map((term, i) => {
        return {
          index: i,
          value: term,
          tf: tf_all_docs[ind][term],
          idf: IDF(docs.length, df[term]),
          tfIdf: TF_IDF(tf_all_docs[ind][term], IDF(docs.length, df[term])),
        };
      }),
    };
  });
  return {
    docTerms,
    similarities,
  };
}
