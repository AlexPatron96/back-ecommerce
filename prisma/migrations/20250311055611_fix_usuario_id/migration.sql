-- AlterTable
CREATE SEQUENCE usuarios_id_seq;
ALTER TABLE "usuarios" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "id" SET DEFAULT nextval('usuarios_id_seq');
ALTER SEQUENCE usuarios_id_seq OWNED BY "usuarios"."id";
