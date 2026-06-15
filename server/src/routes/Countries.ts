import express from "express";

const router = express.Router();

//get all countries
router.get("/", async (req, res) => {
    console.log("get all countries test");
    res.json({ 
        httpMethod: "GET",
        message: "get all countries test"
    });
});

export default router;