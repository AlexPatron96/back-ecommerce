import { PrismaClient } from "@prisma/client";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import nodemailer from "nodemailer";

// Cargar variables de entorno
dotenv.config();

// Configurar Nodemailer
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
// Inicializar Express
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev")); // 📌 Agregar morgan para registrar las peticiones HTTP

// Middleware para registrar todas las peticiones con más detalle
app.use((req, res, next) => {
  console.log(`📌 ${req.method} ${req.url} - Body:`, req.body);
  next();
});

// Prisma Client
export const prisma = new PrismaClient();

// Importar rutas
import Routes from "./modules/Routes";
app.use("/api/v1", Routes);

// Rutas básicas
app.get("/", (req, res) => {
  res.send("API eCommerce funcionando 🚀");
});

export default app;
