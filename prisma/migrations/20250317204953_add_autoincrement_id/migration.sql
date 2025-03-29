-- AlterTable
CREATE SEQUENCE actividades_id_seq;
ALTER TABLE "actividades" ALTER COLUMN "id" SET DEFAULT nextval('actividades_id_seq');
ALTER SEQUENCE actividades_id_seq OWNED BY "actividades"."id";

-- AlterTable
CREATE SEQUENCE carrito_id_seq;
ALTER TABLE "carrito" ALTER COLUMN "id" SET DEFAULT nextval('carrito_id_seq');
ALTER SEQUENCE carrito_id_seq OWNED BY "carrito"."id";

-- AlterTable
CREATE SEQUENCE categorias_id_seq;
ALTER TABLE "categorias" ALTER COLUMN "id" SET DEFAULT nextval('categorias_id_seq');
ALTER SEQUENCE categorias_id_seq OWNED BY "categorias"."id";

-- AlterTable
CREATE SEQUENCE cupones_id_seq;
ALTER TABLE "cupones" ALTER COLUMN "id" SET DEFAULT nextval('cupones_id_seq');
ALTER SEQUENCE cupones_id_seq OWNED BY "cupones"."id";

-- AlterTable
CREATE SEQUENCE detalles_cliente_id_seq;
ALTER TABLE "detalles_cliente" ALTER COLUMN "id" SET DEFAULT nextval('detalles_cliente_id_seq');
ALTER SEQUENCE detalles_cliente_id_seq OWNED BY "detalles_cliente"."id";

-- AlterTable
CREATE SEQUENCE detalles_pedido_id_seq;
ALTER TABLE "detalles_pedido" ALTER COLUMN "id" SET DEFAULT nextval('detalles_pedido_id_seq');
ALTER SEQUENCE detalles_pedido_id_seq OWNED BY "detalles_pedido"."id";

-- AlterTable
CREATE SEQUENCE facturas_id_seq;
ALTER TABLE "facturas" ALTER COLUMN "id" SET DEFAULT nextval('facturas_id_seq');
ALTER SEQUENCE facturas_id_seq OWNED BY "facturas"."id";

-- AlterTable
CREATE SEQUENCE favoritos_id_seq;
ALTER TABLE "favoritos" ALTER COLUMN "id" SET DEFAULT nextval('favoritos_id_seq');
ALTER SEQUENCE favoritos_id_seq OWNED BY "favoritos"."id";

-- AlterTable
CREATE SEQUENCE imagenes_id_seq;
ALTER TABLE "imagenes" ALTER COLUMN "id" SET DEFAULT nextval('imagenes_id_seq');
ALTER SEQUENCE imagenes_id_seq OWNED BY "imagenes"."id";

-- AlterTable
CREATE SEQUENCE impuestos_id_seq;
ALTER TABLE "impuestos" ALTER COLUMN "id" SET DEFAULT nextval('impuestos_id_seq');
ALTER SEQUENCE impuestos_id_seq OWNED BY "impuestos"."id";

-- AlterTable
CREATE SEQUENCE marcas_id_seq;
ALTER TABLE "marcas" ALTER COLUMN "id" SET DEFAULT nextval('marcas_id_seq');
ALTER SEQUENCE marcas_id_seq OWNED BY "marcas"."id";

-- AlterTable
CREATE SEQUENCE medios_publicidad_id_seq;
ALTER TABLE "medios_publicidad" ALTER COLUMN "id" SET DEFAULT nextval('medios_publicidad_id_seq');
ALTER SEQUENCE medios_publicidad_id_seq OWNED BY "medios_publicidad"."id";

-- AlterTable
CREATE SEQUENCE mensajes_id_seq;
ALTER TABLE "mensajes" ALTER COLUMN "id" SET DEFAULT nextval('mensajes_id_seq');
ALTER SEQUENCE mensajes_id_seq OWNED BY "mensajes"."id";

-- AlterTable
CREATE SEQUENCE metodos_entrega_id_seq;
ALTER TABLE "metodos_entrega" ALTER COLUMN "id" SET DEFAULT nextval('metodos_entrega_id_seq');
ALTER SEQUENCE metodos_entrega_id_seq OWNED BY "metodos_entrega"."id";

-- AlterTable
CREATE SEQUENCE metodos_pago_id_seq;
ALTER TABLE "metodos_pago" ALTER COLUMN "id" SET DEFAULT nextval('metodos_pago_id_seq');
ALTER SEQUENCE metodos_pago_id_seq OWNED BY "metodos_pago"."id";

-- AlterTable
CREATE SEQUENCE pedidos_id_seq;
ALTER TABLE "pedidos" ALTER COLUMN "id" SET DEFAULT nextval('pedidos_id_seq');
ALTER SEQUENCE pedidos_id_seq OWNED BY "pedidos"."id";

-- AlterTable
CREATE SEQUENCE producto_impuesto_id_seq;
ALTER TABLE "producto_impuesto" ALTER COLUMN "id" SET DEFAULT nextval('producto_impuesto_id_seq');
ALTER SEQUENCE producto_impuesto_id_seq OWNED BY "producto_impuesto"."id";

-- AlterTable
CREATE SEQUENCE productos_id_seq;
ALTER TABLE "productos" ALTER COLUMN "id" SET DEFAULT nextval('productos_id_seq');
ALTER SEQUENCE productos_id_seq OWNED BY "productos"."id";

-- AlterTable
CREATE SEQUENCE publicidad_id_seq;
ALTER TABLE "publicidad" ALTER COLUMN "id" SET DEFAULT nextval('publicidad_id_seq');
ALTER SEQUENCE publicidad_id_seq OWNED BY "publicidad"."id";

-- AlterTable
CREATE SEQUENCE secciones_id_seq;
ALTER TABLE "secciones" ALTER COLUMN "id" SET DEFAULT nextval('secciones_id_seq');
ALTER SEQUENCE secciones_id_seq OWNED BY "secciones"."id";
