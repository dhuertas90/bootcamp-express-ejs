# Proyecto Básico con Express y EJS

Este proyecto utiliza Express.js para configurar un servidor web básico y EJS como motor de plantillas para renderizar archivos HTML dinámicamente.

## Instalación
1. Instala las dependencias:
    npm install express ejs

2. Ejecuta el servidor:
    node app.js

3. Abre tu navegador y visita:
    http://localhost:3000

## Funcionalidades
- Archivos Estáticos: Sirve archivos desde la carpeta public.
- Renderizado Dinámico: Utiliza EJS para renderizar vistas HTML con variables.
- Ruta Principal: La ruta / renderiza la vista index.ejs con datos dinámicos.

## Estructura de Carpetas Actual
```
.
├── app.js            # Archivo principal del servidor
├── public/           # Archivos estáticos (CSS, imágenes)
│   └── images/       # Imágenes usadas en la vista
├── views/            # Plantillas EJS
│   └── index.ejs     # Plantilla EJS para la página principal
└── package.json      # Dependencias y configuración del 
```
## Nota
- La carpeta public se configura como la carpeta estática, accesible públicamente.
- EJS se usa para renderizar archivos HTML con contenido dinámico.

## Licencia
Bootcamp 2024