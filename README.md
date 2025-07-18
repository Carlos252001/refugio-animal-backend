# 🐾 Refugio Animal - Backend (Node.js + Express + MongoDB)

Este es el backend del sistema web **Refugio Animal**, una plataforma destinada a mejorar el proceso de **adopción y apadrinamiento** de mascotas en refugios de Lima. Está construido con **Node.js**, **Express.js** y **MongoDB**.

---

## 🚀 Funcionalidades

- ✅ Registro, edición y eliminación de mascotas
- ✅ Registro de formularios de adopción (con datos del adoptante y de la mascota)
- ✅ Registro de formularios de apadrinamiento (con botón de PayPal)
- ✅ Consultas de adopciones y apadrinamientos por parte del administrador
- ✅ Rutas API RESTful limpias y organizadas

---

## 📁 Estructura del proyecto
```html
📂 server
├── 📁 controllers # Lógica de negocio por módulo
│ ├── mascota.controller.js
│ ├── adopcion.controller.js
│ └── apadrinamiento.controller.js
├── 📁 models # Esquemas Mongoose
│ ├── mascota.model.js
│ ├── adopcion.model.js
│ └── apadrinamiento.model.js
├── 📁 routes # Rutas REST API
│ ├── mascota.routes.js
│ ├── adopcion.routes.js
│ └── apadrinamiento.routes.js
├── app.js # Archivo principal del servidor
└── config.js # Configuración de base de datos
```

---

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- Body-parser
- Dotenv

---

## 🔧 Instalación y ejecución

1. Clona el repositorio:

  ```bash
  git clone https://github.com/tu_usuario/refugio-animal-backend.git
  cd refugio-animal-backend
  ```
2. Instala las dependencias:
  ```bash
  npm install
  ```
3. Crea un archivo .env con la conexión a tu base de datos MongoDB:
  ```bash
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/refugio-animal
  ```
  ⚠️ Puedes usar MongoDB local o en la nube (MongoDB Atlas).
  
4. Inicia el servidor:
  ```bash
  npm rund dev
  ```
El servidor quedará activo en:
  📍 http://localhost:3000/api

---

## 📦 Endpoints disponibles
Todos los endpoints están bajo el prefijo /api:

### 🐶 Mascotas (/api/mascotas)
  Método	Ruta	Descripción
    -GET	/mascotas	Obtener todas las mascotas
    -GET	/mascotas/:id	Obtener una mascota por ID
    -POST	/mascotas	Crear nueva mascota (con imagen)
    -PUT	/mascotas/:id	Editar mascota
    -DELETE	/mascotas/:id	Eliminar mascota

  Subida de imágenes: usa form-data con campo imagen.

### 📋 Adopciones (/api/adopciones)
  Método	Ruta	Descripción
    -GET	/adopciones	Obtener todas las adopciones
    -POST	/adopciones	Registrar una adopción

### 💰 Apadrinamientos (/api/apadrinamientos)
  Método	Ruta	Descripción
    -GET	/apadrinamientos	Obtener todos los apadrinamientos
    -POST	/apadrinamientos	Registrar un apadrinamiento

---

## 📚 Cómo funciona internamente
### 🔄 Conexión a MongoDB
  La conexión se maneja desde config.js, leyendo la URI del archivo .env.
  
  ````js
  const mongoose = require('mongoose');
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  ````

### 🧠 Modelos (MongoDB)
  Usamos Mongoose para definir los esquemas de datos, como:
    -mascota.model.js: nombre, edad, imagen, historia, etc.
    -adopcion.model.js: datos del adoptante y referencia a la mascota
    -apadrinamiento.model.js: datos del padrino, monto y mascota relacionada

### 🧩 Controladores
  Cada controlador (.controller.js) contiene la lógica para manejar las solicitudes, como guardar datos, buscar por ID, manejar errores, etc.

### 🌐 Rutas (REST API)
  Las rutas (.routes.js) definen los endpoints y llaman a los controladores correspondientes.
  
---

## 👨‍💻 Autor
Carlos Jesús Ocaña Huamán
Desarrollado como parte de un proyecto académico con enfoque social.
