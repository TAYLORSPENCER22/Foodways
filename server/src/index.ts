import express from "express";
import { PrismaClient } from "../generated/prisma-client/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";
import cors from "cors";
import { get } from "node:http";

// Initialize Express app
const app = express();

app.use(cors({
    origin: "*",
})
)

//Import routes
import countriesRoutes from "./routes/countries.js"
import foodCardsRoutes from "./routes/foodCards.js"

// Initialize Prisma Client with the PostgreSQL adapter
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter }); 


app.use(express.json());

// API Routes
app.use("/countries", countriesRoutes(prisma)); // Mount the countries routes at /countries
app.use("/food-cards", foodCardsRoutes(prisma)); // Mount the food cards routes at /food-cards




//Error handling
app.use((err: any, req: express.Request, res: express.Response) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
});


// Start the server
const port = 5001;
const server = app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});

