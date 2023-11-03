//DF: número de documentos en N en los que la palabra clave x aparece.

export function DF(docs: string[][]): {[key: string]: number} {
  const df = {} as {[key: string]: number};

  docs.forEach(doc => doc.forEach(word => {
    if (df[word] === undefined) {
      df[word] = 1;
      return;
    }
    df[word]++;
  }));

  return df;
}
