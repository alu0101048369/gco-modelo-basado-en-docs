import { Similarity } from "../common/types";

export class SimilarityCalculator {
  private normalizedTF = [] as {[key: string]: number}[];
  
  constructor(tf: {[key: string]: number}[]) {
    tf.forEach((docTF) => {
      const sum = Math.sqrt(Object.values(docTF).reduce((acc, val) => acc + (val*val), 0));
      
      this.normalizedTF.push(
        Object.keys(docTF).reduce((acc, key) => {
          acc[key] = docTF[key] / (sum || 1);
          return acc;
        }, {} as { [key: string]: number })
      );
    });
  }

  calculateSims(docIndex: number): Similarity[] {
    return this.normalizedTF.map((tf, tfIndex) => {
      return {
        docs: [docIndex, tfIndex],
        value: Object.keys(tf).reduce((acc, key) => acc + tf[key] * (this.normalizedTF[docIndex][key] || 0), 0)
      }
    });
  }
}
