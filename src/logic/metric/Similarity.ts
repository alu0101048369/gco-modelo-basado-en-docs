import { Similarity } from "../common/types";
import { TF_IDF } from "./TFIDF";

export function CalculateSimilarities(
  docs: string[][],
  tf: { [key: string]: number }[]
): Similarity[] {
  const normalized_tf: { [key: string]: number }[] = [];
  // Calculating normalized tf
  tf.forEach((doc_tf) => {
    const tf_line = {} as { [key: string]: number };
    let sum = 0;

    for (let key in doc_tf) {
      sum += doc_tf[key] * doc_tf[key];
    }
    sum = Math.sqrt(sum);

    for (let key in doc_tf) {
      tf_line[key] = doc_tf[key] / (sum || 1);
    }

    normalized_tf.push(tf_line);
  });

  const result: Similarity[] = [];
  docs.forEach((_, index) => {
    normalized_tf.forEach((other_doc_tf, i) => {
      if (index !== i) {
        let sim = 0;
        for (let key in other_doc_tf) {
          sim += other_doc_tf[key] * (normalized_tf[index][key] || 0);
        }
        result.push({
          docs: [index, i],
          value: sim,
        });
      }
    });
  });
  return result;
}
