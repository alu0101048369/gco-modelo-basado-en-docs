
//Frecuencia de la palabra clave x en el documento y.

export function TF(
  x: string,
  y: string[]
  ){
  
    let n_clave = 0;
    for (let i = 0; i < y.length; i++) {
      const element = y[i];
      if(element == x) {
        n_clave++;
      }
    }

    let result = 1 + Math.log10(n_clave);
    return result;
}

/*TEST
 
let palabra_clave = "formar";
let doc = ["doc", "formar", "crear", "formar", "cabeza", "casa", "cabaña", "formar", "forma"];

let result = TF(palabra_clave, doc);
let ok = 1+ Math.log10(3);

console.log(`Resultado: ${result} \nResultado Correcto: ${ok}`); */