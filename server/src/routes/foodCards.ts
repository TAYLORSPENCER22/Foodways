import express from "express";

export default function createFoodCardsRouter(prisma: any) {
    const router = express.Router();


//create a food card 
router.post("/", async (req, res) => {
    console.log("Country Created Success!");
    const { countryId, name, slug: providedSlug, description, story, imageUrl, regionLabel, ingredients } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Name is required" });
    }

    const slug = providedSlug ??
        String(name)
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]/g, "");

    const newFoodCard = await prisma.foodCard.create({
        data: {
            countryId,
            name,
            slug,
            description,
            story,
            imageUrl,
            regionLabel,
            ingredients
        },
    });
    res.json(newFoodCard);

})
    return router;
}