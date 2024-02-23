# taxi24_challenge_GonzalesValenciaAngel

EL proyecto Taxi24 consta de carpetas que cumplen la funcion de organizar y que el flujo de procesos sea más entendible
Carpetas:
- controllers : Recibe las diferentes peticiones para llevar al repository.
- database : Se hace la conexión a la base de datos, se consume el archivo .env para obtener las variables externalizadas.
- models : Se crean los modelos de las tablas con sus columnas y relaciones entre tablas.
- repository: Recibe las peticiones del controller y hace las consultas a la base de datos.
- routes: Se especifican las distintas rutas para poder consumir.

La carperta impor_db contiene un archivo para poder importar el contenido de una base de datos y hacer las pruebas necesarias.


Luego de clonar el proyecto se debera instalar las dependencias de node con el comando npm install

Para poder ejecuatar desde la tarminar de VSC el comando: tsc y luego nodemon dist/app.js