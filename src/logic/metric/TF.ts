//Frecuencia de la palabra clave x en el documento y.
export function TF(doc: string[]): { [key: string]: number } {
  const count = doc.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {} as { [key: string]: number })

  const results = Object.keys(count).reduce((acc, key) => {
    acc[key] = 1 + Math.log10(count[key]);
    return acc;
  }, {} as { [key: string]: number })
  return results;
}
