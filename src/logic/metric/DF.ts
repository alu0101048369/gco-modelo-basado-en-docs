//DF: número de documentos en N en los que la palabra clave x aparece.


export function IDF(
  N: number,
  dfx: number
  ){
    let div = N/dfx;
    let result = Math.log10(div);
    return result;
  }