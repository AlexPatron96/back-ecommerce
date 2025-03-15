CREATE TABLE "actividades" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "tipo_actividad" text NOT NULL,
  "descripcion" text,
  "fecha" timestamp DEFAULT (now())
);

CREATE TABLE "carrito" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "producto_id" bigint,
  "cantidad" integer NOT NULL
);

CREATE TABLE "categorias" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text,
  "seccion_id" bigint
);

CREATE TABLE "cupones" (
  "id" bigint PRIMARY KEY NOT NULL,
  "codigo" text UNIQUE NOT NULL,
  "descripcion" text,
  "descuento_porcentaje" numeric(5,2),
  "descuento_fijo" numeric(10,2),
  "fecha_inicio" timestamp,
  "fecha_fin" timestamp,
  "uso_maximo" integer,
  "uso_actual" integer DEFAULT 0
);

CREATE TABLE "detalles_cliente" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "nombre_completo" text NOT NULL,
  "numero_cedula" text,
  "telefono" text,
  "direccion" text,
  "referencia" text,
  "provincia" text,
  "ciudad" text,
  "informacion_adicional" text
);

CREATE TABLE "detalles_pedido" (
  "id" bigint PRIMARY KEY NOT NULL,
  "pedido_id" bigint,
  "producto_id" bigint,
  "cantidad" integer NOT NULL,
  "precio_unitario" numeric(10,2) NOT NULL
);

CREATE TABLE "facturas" (
  "id" bigint PRIMARY KEY NOT NULL,
  "pedido_id" bigint,
  "fecha_emision" timestamp DEFAULT (now()),
  "total" numeric(10,2) NOT NULL,
  "detalles" text
);

CREATE TABLE "favoritos" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "producto_id" bigint
);

CREATE TABLE "imagenes" (
  "id" bigint PRIMARY KEY NOT NULL,
  "producto_id" bigint,
  "url" text NOT NULL
);

CREATE TABLE "impuestos" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "porcentaje" numeric(5,2) NOT NULL
);

CREATE TABLE "marcas" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text
);

CREATE TABLE "medios_publicidad" (
  "id" bigint PRIMARY KEY NOT NULL,
  "publicidad_id" bigint,
  "tipo" text,
  "url" text NOT NULL
);

CREATE TABLE "mensajes" (
  "id" bigint PRIMARY KEY NOT NULL,
  "remitente_id" bigint,
  "destinatario_id" bigint,
  "contenido" text NOT NULL,
  "fecha_envio" timestamp DEFAULT (now())
);

CREATE TABLE "metodos_entrega" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text,
  "costo" numeric(10,2)
);

CREATE TABLE "metodos_pago" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text,
  "costo" numeric(10,2)
);

CREATE TABLE "pedidos" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "fecha_pedido" timestamp DEFAULT (now()),
  "estado" text NOT NULL,
  "total" numeric(10,2) NOT NULL,
  "numero_pedido" text UNIQUE,
  "subtotal" numeric(10,2),
  "valor_iva" numeric(10,2),
  "costo_envio" numeric(10,2),
  "total_neto" numeric(10,2),
  "metodo_entrega_id" bigint,
  "metodo_pago_id" bigint,
  "descuento" numeric(10,2),
  "cupon_id" bigint,
  "detalles" text
);

CREATE TABLE "producto_impuesto" (
  "id" bigint PRIMARY KEY NOT NULL,
  "producto_id" bigint,
  "impuesto_id" bigint
);

CREATE TABLE "productos" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text,
  "precio" numeric(10,2) NOT NULL,
  "stock" integer NOT NULL,
  "categoria_id" bigint,
  "visible" boolean DEFAULT true,
  "marca_id" bigint,
  "discount_price" numeric(10,2),
  "colors" text[],
  "weight" text,
  "condition" text,
  "warranty" text,
  "shipping_included" boolean DEFAULT false,
  "time_left" text,
  "sku" text UNIQUE
);

CREATE TABLE "publicidad" (
  "id" bigint PRIMARY KEY NOT NULL,
  "titulo" text NOT NULL,
  "contenido" text,
  "fecha_inicio" timestamp,
  "fecha_fin" timestamp,
  "visible" boolean DEFAULT true,
  "texto_html" text
);

CREATE TABLE "secciones" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "descripcion" text
);

CREATE TABLE "sesiones" (
  "id" bigint PRIMARY KEY NOT NULL,
  "usuario_id" bigint,
  "token" text NOT NULL,
  "inicio" timestamp DEFAULT (now()),
  "fin" timestamp
);

CREATE TABLE "usuarios" (
  "id" bigint PRIMARY KEY NOT NULL,
  "nombre" text NOT NULL,
  "email" text UNIQUE NOT NULL,
  "contraseña" text NOT NULL,
  "tipo_usuario" text NOT NULL,
  "nivel_prioridad" integer DEFAULT 0
);

ALTER TABLE "actividades" ADD CONSTRAINT "actividades_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "carrito" ADD CONSTRAINT "carrito_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos" ("id");

ALTER TABLE "carrito" ADD CONSTRAINT "carrito_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "categorias" ADD CONSTRAINT "categorias_seccion_id_fkey" FOREIGN KEY ("seccion_id") REFERENCES "secciones" ("id");

ALTER TABLE "detalles_cliente" ADD CONSTRAINT "detalles_cliente_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "detalles_pedido" ADD CONSTRAINT "detalles_pedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos" ("id");

ALTER TABLE "detalles_pedido" ADD CONSTRAINT "detalles_pedido_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos" ("id");

ALTER TABLE "facturas" ADD CONSTRAINT "facturas_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "pedidos" ("id");

ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos" ("id");

ALTER TABLE "favoritos" ADD CONSTRAINT "favoritos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "imagenes" ADD CONSTRAINT "imagenes_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos" ("id");

ALTER TABLE "medios_publicidad" ADD CONSTRAINT "medios_publicidad_publicidad_id_fkey" FOREIGN KEY ("publicidad_id") REFERENCES "publicidad" ("id");

ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_destinatario_id_fkey" FOREIGN KEY ("destinatario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "mensajes" ADD CONSTRAINT "mensajes_remitente_id_fkey" FOREIGN KEY ("remitente_id") REFERENCES "usuarios" ("id");

ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_cupon_id_fkey" FOREIGN KEY ("cupon_id") REFERENCES "cupones" ("id");

ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_metodo_entrega_id_fkey" FOREIGN KEY ("metodo_entrega_id") REFERENCES "metodos_entrega" ("id");

ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_metodo_pago_id_fkey" FOREIGN KEY ("metodo_pago_id") REFERENCES "metodos_pago" ("id");

ALTER TABLE "pedidos" ADD CONSTRAINT "pedidos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "producto_impuesto" ADD CONSTRAINT "producto_impuesto_impuesto_id_fkey" FOREIGN KEY ("impuesto_id") REFERENCES "impuestos" ("id");

ALTER TABLE "producto_impuesto" ADD CONSTRAINT "producto_impuesto_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos" ("id");

ALTER TABLE "productos" ADD CONSTRAINT "productos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias" ("id");

ALTER TABLE "productos" ADD CONSTRAINT "productos_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "marcas" ("id");

ALTER TABLE "sesiones" ADD CONSTRAINT "sesiones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");
