import app, { prisma } from "./app";

// Configurar puerto
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejo de errores de Prisma
process.on("SIGINT", async () => {
  console.log("Cerrando Prisma...");
  await prisma.$disconnect();
  process.exit(0);
});
