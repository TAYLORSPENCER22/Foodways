import express from "express";

export default function createCountriesRouter(prisma: any) {
const router = express.Router();

//get all countries
router.get("/", async (req, res) => {
    console.log("get all countries success");
    const countries = await prisma.country.findMany({ orderBy: { name: "asc" }, include: { foodCards: true } });
    res.json(countries);
});


//create a country test (will remove later)
router.post("/", async (req, res) => {
    console.log("Country Created Success!");
    const { name, slug: providedSlug, imageUrl } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const slug = providedSlug ??
        String(name)
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

    const newCountry = await prisma.country.create({
        data: {
            name,
            slug,
            imageUrl
        },
    });
    res.json(newCountry);
  
    newCountry.name = name;
})




 return router;
}    
