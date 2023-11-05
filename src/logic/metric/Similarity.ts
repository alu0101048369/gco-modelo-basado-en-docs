import { Similarity } from "../common/types";

export function CalculateSimilarities(
  docs: string[][],
  tf: { [key: string]: number }[]
): Similarity[] {
  const normalized_tf: number[][] = [];
  // Calculating normalized tf
  tf.forEach((doc_tf, i) => {
    const tf_line: number[] = [];
    let sum = 0;
    for (let key in doc_tf) {
      sum += doc_tf[key];
    }
    for (let key in doc_tf) {
      tf_line.push(doc_tf[key] / (sum || 1));
    }
    normalized_tf.push(tf_line);
  });

  const result: Similarity[] = [];
  docs.forEach((doc, index) => {
    normalized_tf.forEach((other_doc_tf, i) => {
      if (index !== i) {
        let sim = 0;
        other_doc_tf.forEach((term, x) => {
          sim += term * normalized_tf[index][x];
        });
        result.push({
          docs: [index, i],
          value: sim,
        });
      }
    });
  });
  return result;
}
