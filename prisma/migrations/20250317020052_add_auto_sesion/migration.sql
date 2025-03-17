-- AlterTable
CREATE SEQUENCE sesiones_id_seq;
ALTER TABLE "sesiones" ALTER COLUMN "id" SET DEFAULT nextval('sesiones_id_seq');
ALTER SEQUENCE sesiones_id_seq OWNED BY "sesiones"."id";
