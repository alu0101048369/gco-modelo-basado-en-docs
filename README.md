# Sistema recomendador 
- Laura Dorta Marrero <alu0101400624@ull.edu.es>
- Miguel Dorta Rodríguez <alu0101048369@ull.edu.es>
- Saúl García Martín <alu0101405810@ull.edu.es>

## Índice

1. [Descripción del concepto](#descripción-del-concepto)

2. [Instalación  y despliegue](#instalación-y-despliegue)

3. [Ejemplo de uso](#ejemplo-de-uso)

4. [Descripción del código](#descripción-del-código)

6. [Referencias](#referencias)

## Descripción del concepto
El objetivo de este proyecto es ofrecer una aplicación web para computar predicciones en base a datos proporcionados, usando diferentes sistemas predictivos.

## Instalación y despliegue

Esta aplicación se despliega automáticamente cada vez que hay cambios en la rama `main` gracias a la integración de CI/CD de GitHub Actions y Cloudflare Pages. La URL en la que se despliega es [https://gco-sistema-recomendacion.pages.dev/](https://gco-modelo-basado-en-docs.pages.dev)

Si se desease instalar el proyecto de forma local en un dispositivo, se requerirá de NodeJS, NPM, y opcionalmente un servidor web para poder visualizarlo. Para ello importe el repositorio y ejecute el siguiente comando para instalar las dependencias:

```sh
npm install
```

Si se dispone de servidor web y se quiere obtener el resultado del empaquetado de la web, ejecute este comando:

```sh
npm run build
```

Y encontrará la web en el directorio `dist/`

Si por el contrario, no dispone de servidor web y simplemente quiere visualizar la web (no ponerla en producción), ejecute el siguiente comando:

```sh
npm run dev
```

Y esto le permitirá visualizar la web accediendo a http://localhost:5173/


## Ejemplo de uso


## Descripción del código
Este proyecto posee el siguiente código:
- Un directorio `src` que contiene el código fuente del proyecto. Dentro de este se encuentran lo siguiente:

    - El directorio `logic` que contiene las funciones y parámetros necesarios para los cálculos matemáticos del código. Dentro de este se encuentra lo siguiente:
      - Un directorio `common` el cual contiene código que va a ser compartido entre la interfaz de usuario y la lógica de la aplicación. Dentro de este se encuentra:
        - Un directorio `out_types`. Dentro de este se encuentra:
          - Un fichero `correlation_log.ts`.
          - Un fichero `element_predicition_data.ts`.
          - Un fichero `operation_log.ts`
          - Un fichero `recomendation_output_result.ts`.

      - Un directorio `input`. Dentro de este se encuentra un directorio con un único fichero llamado `file.ts`. Este es el que se encarga de extraer la información de los inputs.
      
      - Un directorio `metric` que contiene las funciones mátematicas requeridas. En esta se encuentran los ficheros `DF.ts`, `IDF.ts`, `Similarity.ts`, `TF.ts`, `TFIDF.ts` y `common.ts`.
      - Un fichero `function.ts` que llama e utiliza las funciones desarrolladas.

    - El directorio `ui` que contiene:
      - El directorio `component` que contienelos componentes de código que van a manejar la interfaz de usuario. A su ves, contiene lo siguiente:
        - Un directorio `doclist` que contiene el fichero `index.ts`.
        - Un directorio `form` que contiene `docs.ts`, `index.ts`, `lemmatization.ts`, `process.ts`, `stepper.ts` y `stopwords.ts`
        - Un directorio `similarity_table` que contiene el fichero `index.ts`.
        - Un directorio `terms_table` que contiene el fichero `index.ts`.

      - Un directorio `view`, que se encarga de administrar el input y el output.

    - El fichero `main.ts` que contiene la función main.

    - El fichero `vite-env.d.ts` con los parámetros de configuración del empaquetador Vite.

- Un directorio `testdata` que contiene los datos a probar.

## Referencias
[Sistema Recomendador](https://gco-modelo-basado-en-docs.pages.dev)


