import { DocTerms, Results, Term } from "./common/types";
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
    return {
      docIndex: ind,
      terms: doc.map((term, i) => {
        return {
          index: i,
          value: term,
          tf: tf_all_docs[ind][term],
          idf: IDF(docs.length, df[term]),
          tfIdf: TF_IDF(tf_all_docs[ind][term]),
        };
      }),
    };
  });
  return {
    docTerms,
    similarities,
  };
}
