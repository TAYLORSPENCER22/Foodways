import express from "express";

export default function createCountriesRouter(prisma: any) {
const router = express.Router();

//get all countries
router.get("/", async (req, res) => {
    console.log("get all countries success");
    const countries = await prisma.country.findMany({ orderBy: { name: "asc" }, include: { foodCards: true } });
    res.json(countries);
});

//get one country by slug
router.get("/:slug", async (req, res) => {
    console.log("get country by slug success");
    const { slug } = req.params;
    const country = await prisma.country.findUnique({ where: { slug }, include: { foodCards: true } });
    // test console.log("slug:", slug);
    if (!country) {
        return res.status(404).json({ error: "Country not found" });
    } 
    res.json(country);
    
});


//create a country test (will remove later)
router.post("/", async (req, res) => {
    console.log("Country Created Success!");
    const { name, slug: providedSlug, countryFlagUrl, countryImageUrl, description,} = req.body;
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
        countryFlagUrl,
        countryImageUrl,
        description,
        },
    });
    res.json(newCountry);
  
    newCountry.name = name;
})


 return router;
}    
