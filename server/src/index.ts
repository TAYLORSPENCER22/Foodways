import express from "express";
import { PrismaClient } from "../generated/prisma-client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

const app = express();





const port = 5001;
const server = app.listen(port, () => {
    console.log(`Server is runningggg on ${port}`)
});


// GET request
