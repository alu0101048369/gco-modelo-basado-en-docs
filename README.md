# Sistema recomendador basado en contenido
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
El objetivo de este proyecto es ofrecer una aplicación web para mostrar las relaciones existentes entre diferentes documentos de texto.

## Instalación y despliegue

Esta aplicación se despliega automáticamente cada vez que hay cambios en la rama `main` gracias a la integración de CI/CD de GitHub Actions y Cloudflare Pages. La URL en la que se despliega es https://gco-modelo-basado-en-docs.pages.dev

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
Para poder hacer uso de nuestro Sistema de Recomendación debe acceder al navegador y acceder a la web. Nosotros accederemos a https://gco-modelo-basado-en-docs.pages.dev pero usted puede acceder a su copia local. Lo primero que veremos es esto:

![Página principal del recomendador](/images/Eleccion_doc.png)

Ahora eligiremos un archivo a utilizar. Para ello pulsará sobre "Seleccionar archivo" y eligirá uno de su biblioteca. Como se observa en la siguiente imagen, se seleccionó el archivo `documents-01.txt` que es uno de los conjuntos de documentos de ejemplo del repositorio añadido a las [Referencias](#referencias). Puede encontrar varios de estos documentos de ejemplo en el directorio `testdata/`.

![Página principal: Elección del documento](/images/Selec_doc.png)

Una vez elegido el archivo, pasaremos a selecionar el fichero de palabras de parada. Este deberá estar en el mismo idioma que los documentos previamente seleccionados.

![Página principal: Pantalla de elección del fichero de palabras de parada](/images/Eleccion_stp.png)

En este caso, se ha elegido `stop-words-en.txt` que también se encuentra en el directorio testdata/.

![Página principal: Elección del fichero de palabras de parada](/images/Selec_stp.png)

Seguidamente, se nos ha presentado otro selecionador de archivos. En este debemos añadir la lematización necesaria, es decir a la que corresponda el idioma.

![Página principal: Pantalla de elección del fichero de lematización](/images/Eleccion_corpus.png)

En este caso, se ha elegido `corpus-en.txt` que también se encuentra en el directorio testdata/.

![Página principal: Elección del fichero de lematización](/images/Selec_corpus.png)

Una vez seleccionados todos los documentos, se mostraría la página de resultados. Como se puede observar nos da la opción de hacer click en los distintos documentos pertenecientes a `doctuments-01.txt` y visualizar la información extraída.

![Página de resultados](/images/Resultado.png)

## Descripción del código
Este proyecto posee el siguiente código:
- Un directorio `src` que contiene el código fuente del proyecto. Dentro de este se encuentran lo siguiente:

    - El directorio `logic` que contiene las funciones y parámetros necesarios para los cálculos matemáticos del código. Dentro de este se encuentra lo siguiente:
      - Un directorio `common` el cual contiene código que va a ser compartido entre la interfaz de usuario y la lógica de la aplicación.
      - Un directorio `metric` que contiene las funciones mátematicas requeridas. En esta se encuentran los ficheros `DF.ts`, `IDF.ts`, `Similarity.ts`, `TF.ts`, `TFIDF.ts` y `common.ts`.
      - Un fichero `function.ts` que llama e utiliza las funciones desarrolladas.

    - El directorio `ui` que contiene:
      - El directorio `component` que contienelos componentes de código que van a manejar la interfaz de usuario. A su ves, contiene lo siguiente:
        - Un directorio `doclist` que contiene el código para generar la lista de botones para seleccionar los documentos en la vista de output.
        - Un directorio `form` que contiene el código necesario para manejar los archivos del usuario, junto con el parseo y normalización de los datos.
        - Un directorio `similarity_table` que contiene el código para poblar la tabla de similaridad en la vista del output.
        - Un directorio `terms_table` que contiene el código para poblar la tabla de términos en la vista del output.

      - Un directorio `view`, que se encarga de administrar las pantallas principales de la aplicación.

    - El fichero `main.ts` que contiene la función main.

    - El fichero `vite-env.d.ts` con los parámetros de configuración del empaquetador Vite.

- Un directorio `testdata` que contiene los ficheros de datos a probar.

## Referencias
[Sistema Recomendador](https://gco-modelo-basado-en-docs.pages.dev)

[Documentos Ejemplo](https://github.com/ull-cs/gestion-conocimiento/tree/main/recommeder-systems/examples-documents)


