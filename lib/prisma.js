import { PrismaClient } from "../lib/generated/prisma";
export const db = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalThis.prisma = db;


}

//*globalThis.prisma is a variable that ensures that the Prisma client instance is reused across hot 
//*reloads during development, Without this each time your app reloads a new instance of Prisma client would be created potentially leading to connection issues
