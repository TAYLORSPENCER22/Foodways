import express from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const app = express();





const port = 5001;
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});


// GET request
