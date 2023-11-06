//Frecuencia de la palabra clave x en el documento y.
export function TF(doc: string[]): { [key: string]: number } {
  const tf = {} as { [key: string]: number };

  doc.forEach((word) => {
    if (tf[word] === undefined) {
      tf[word] = 1;
      return;
    }
    tf[word]++;
  });
  return tf;
}

/*TEST
 
let palabra_clave = "formar";
let doc = ["doc", "formar", "crear", "formar", "cabeza", "casa", "cabaña", "formar", "forma"];

let result = TF(palabra_clave, doc);
let ok = 1+ Math.log10(3);

console.log(`Resultado: ${result} \nResultado Correcto: ${ok}`); */
