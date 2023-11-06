export function TF_IDF(tf: number): number {
  return tf > 0 ? 1 + Math.log10(tf) : 0;
}
