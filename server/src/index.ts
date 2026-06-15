import express from "express";
import { PrismaClient } from "../generated/prisma-client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import { get } from "node:http";

//Import routes
import countriesRoutes from "./routes/countries.js"

// Initialize Prisma Client with the PostgreSQL adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter }); 

// Initialize Express app
const app = express();

app.use(express.json());

// API Routes
app.use("/countries", countriesRoutes); // Mount the countries routes at /countries




//create country
// app.post("/countries", async (req, res) => {
//     const { name, slug: providedSlug } = req.body;

//     // generate a slug if one wasn't provided
//     const slug =
//         providedSlug ??
//         String(name)
//             .toLowerCase()
//             .trim()
//             .replace(/\s+/g, "-")
//             .replace(/[^\w-]/g, "");

//     const country = await prisma.country.create({
//         data: {
//             name,
//             slug,
//         },
//     });
//     res.json(country);
// })



const port = 5001;
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

