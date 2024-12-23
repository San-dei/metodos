# MyMethods

Este proyecto implementa varias funciones manuales en un entorno interactivo utilizando Next.js y React. A continuación, encontrarás las instrucciones para instalar y ejecutar el proyecto.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu sistema:

- [Node.js](https://nodejs.org/) (versión 18 o superior).
- [npm](https://www.npmjs.com/) (incluido con Node.js) o [yarn](https://yarnpkg.com/).

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/San-dei/metodos.git
   ```

2. Cambia al directorio del proyecto:

   ```bash
   cd mymethods
   ```

3. Instala las dependencias:

   Usando `npm`:
   ```bash
   npm install
   ```

   O usando `yarn`:
   ```bash
   yarn install
   ```

## Scripts disponibles

En el archivo `package.json`, se incluyen los siguientes scripts:

- `dev`: Inicia el servidor de desarrollo con TurboPack.
  ```bash
  npm run dev
  ```
  O con yarn:
  ```bash
  yarn dev
  ```

- `build`: Genera una versión optimizada para producción.
  ```bash
  npm run build
  ```

- `start`: Inicia el servidor en modo producción (después de ejecutar `build`).
  ```bash
  npm run start
  ```

- `lint`: Ejecuta ESLint para analizar el código y encontrar problemas.
  ```bash
  npm run lint
  ```

## Ejecución del proyecto

1. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```
   O con yarn:
   ```bash
   yarn dev
   ```

2. Abre tu navegador y navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación en acción.

## Tecnologías utilizadas

- **Next.js**: Framework para aplicaciones web modernas.
- **React**: Biblioteca de interfaces de usuario.
- **TypeScript**: Superconjunto tipado de JavaScript.
- **ESLint**: Herramienta para analizar el código.

## Notas

- Este proyecto está configurado con Next.js 15 y React 19 en versión RC.
- Las funcionalidades principales están desarrolladas con TypeScript para garantizar un código más seguro y mantenible.

## Contribuir

Si deseas contribuir a este proyecto, realiza un fork, crea una rama para tus cambios y abre un pull request:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Descripcion de tus cambios"
   ```
4. Sube tus cambios:
   ```bash
   git push origin nombre-de-tu-rama
   ```
5. Abre un pull request en el repositorio original.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes consultarla en el archivo `LICENSE`.

