# Ecommerce Backend

## Descripción

Este proyecto es el backend de una aplicación de comercio electrónico. Proporciona una API para gestionar productos, usuarios, pedidos y pagos.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/ecommerce-backend.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd ecommerce-backend
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=5000
   MONGO_URI=tu_mongo_uri
   JWT_SECRET=tu_jwt_secreto
   ```

## Uso

1. Inicia el servidor:
   ```bash
   npm start
   ```
2. La API estará disponible en `http://localhost:5000`.

## Endpoints

- **Productos**
  - `GET /api/products` - Obtener todos los productos
  - `POST /api/products` - Crear un nuevo producto
- **Usuarios**
  - `POST /api/users/register` - Registrar un nuevo usuario
  - `POST /api/users/login` - Iniciar sesión
- **Pedidos**
  - `GET /api/orders` - Obtener todos los pedidos
  - `POST /api/orders` - Crear un nuevo pedido

## Contribución

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Sube tus cambios (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

📦 ecommerce-backend
┣ 📂 src
┃ ┣ 📂 config # Configuraciones generales (DB, env, etc.)
┃ ┣ 📂 modules # Módulos de la aplicación (users, products, orders, etc.)
┃ ┃ ┣ 📂 users
┃ ┃ ┃ ┣ 📜 users.controller.ts
┃ ┃ ┃ ┣ 📜 users.service.ts
┃ ┃ ┃ ┣ 📜 users.repository.ts
┃ ┃ ┃ ┗ 📜 users.routes.ts
┃ ┃ ┗ 📂 products
┃ ┣ 📂 middleware # Middlewares globales (Auth, Logs, Validaciones, etc.)
┃ ┣ 📂 utils # Funciones auxiliares reutilizables
┃ ┣ 📂 tests # Pruebas unitarias e integración
┃ ┣ 📜 app.ts # Configuración principal de Express
┃ ┣ 📜 server.ts # Punto de entrada del servidor
┣ 📜 .env # Variables de entorno
┣ 📜 .gitignore # Archivos ignorados en Git
┣ 📜 package.json # Dependencias y scripts
┣ 📜 tsconfig.json # Configuración de TypeScript
┗ 📜 README.md # Documentación del proyecto

🛠️ Pasos para Iniciar el Proyecto
1️⃣ Inicializar el Proyecto
mkdir ecommerce-backend && cd ecommerce-backend
npm init -y

2️⃣ Instalar Dependencias
npm install express cors dotenv jsonwebtoken bcryptjs multer helmet prisma @prisma/client zod

3️⃣ Instalar Dependencias de Desarrollo
npm install --save-dev typescript ts-node nodemon eslint jest supertest @types/node @types/express @types/jsonwebtoken @types/bcryptjs @types/multer @types/cors @types/helmet

4️⃣ Configurar TypeScript
npx tsc --init
(Editar tsconfig.json y habilitar "strict": true, "outDir": "./dist", "rootDir": "./src")

5️⃣ Configurar Prisma
npx prisma init
(Luego, configurar .env con DATABASE_URL y migrar la base de datos)

6️⃣ Crear la estructura de carpetas
mkdir -p src/{config,modules,utils,middleware,tests}

7️⃣ Iniciar el Servidor
npx ts-node src/server.ts

\***\*\*\*\*\***PSQL\***\*\*\*\*\***
psql -U postgres

Listar las Bases de Datos
Una vez dentro de psql, ejecuta este comando:
\l

3️⃣ Salir de PostgreSQL
Para salir de la consola de PostgreSQL, escribe:
\q

¿Quieres ver las tablas dentro de una base de datos específica? Si ya estás dentro de psql y conectado a una base de datos, usa:
\dt

npx prisma db pull

npx prisma generate

npx prisma studio
