//Frecuencia de la palabra clave x en el documento y.
export function TF(doc: string[]): { [key: string]: number } {
  const count = {} as { [key: string]: number };

  doc.forEach((word) => {
    if (count[word] === undefined) {
      count[word] = 1;
      return;
    }
    count[word]++;
  });
  const tf = {} as { [key: string]: number };
  for (let key in count) {
    tf[key] = 1 + Math.log10(count[key]);
  }
  return tf;
}

/*TEST
 
let palabra_clave = "formar";
let doc = ["doc", "formar", "crear", "formar", "cabeza", "casa", "cabaña", "formar", "forma"];

let result = TF(palabra_clave, doc);
let ok = 1+ Math.log10(3);

console.log(`Resultado: ${result} \nResultado Correcto: ${ok}`); */
