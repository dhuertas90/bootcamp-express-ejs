const express = require('express');
const app = express();
const port = 3000;

// Configurar la carpeta 'public' como carpeta estática
app.use(express.static('public'));
/* Hace que todos los archivos dentro de la carpeta public 
sean accesibles públicamente a través del navegador. */


/*
Renderiza Archivos HTML con Plantillas:

Si deseas renderizar archivos HTML dinámicamente 
(por ejemplo, para usar variables o lógica), 
puedes usar un motor de plantillas como EJS, 
Pug, o Handlebars.
*/


// Configura EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', './views'); // Carpeta donde estarán los archivos EJS

// Define rutas para renderizar una vista EJS

// Ruta principal
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Página de Inicio',          // --> titulo de la pagina
        studentName: "David",               // --> nombre del alumno
        courseName: "Full Stack",           // --> nombre del curso
        organizationName: "CILSA ONG"       // --> lugar/Organización
    });
});
// Si tuviera muchas rutas (lo vimos antes), agrupamos rutas relacionadas en módulos

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
