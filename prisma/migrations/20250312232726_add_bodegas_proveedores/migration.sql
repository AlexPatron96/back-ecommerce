-- CreateTable
CREATE TABLE "bodega" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT,
    "capacidad" INTEGER,
    "descripcion" TEXT,

    CONSTRAINT "bodega_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proveedor" (
    "id" BIGSERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "contacto" TEXT,
    "telefono" TEXT,
    "email" TEXT,

    CONSTRAINT "proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producto_proveedor" (
    "id" BIGSERIAL NOT NULL,
    "productoId" BIGINT NOT NULL,
    "proveedorId" BIGINT NOT NULL,
    "precio" DECIMAL(10,2) NOT NULL,
    "tiempoEntrega" INTEGER NOT NULL,
    "disponibilidad" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "producto_proveedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventario" (
    "id" BIGSERIAL NOT NULL,
    "productoId" BIGINT NOT NULL,
    "bodegaId" BIGINT NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "inventario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "producto_proveedor" ADD CONSTRAINT "producto_proveedor_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto_proveedor" ADD CONSTRAINT "producto_proveedor_proveedorId_fkey" FOREIGN KEY ("proveedorId") REFERENCES "proveedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventario" ADD CONSTRAINT "inventario_bodegaId_fkey" FOREIGN KEY ("bodegaId") REFERENCES "bodega"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
