const router = require("express").Router();
const path = require("path");

router.get("/stats", (req, get) => {
    get.sendFile(path.joina(__dirname, "../public.stats.html"))
});

router.get("/exercise", (req, get) => {
    get.sendFile(path.join(__dirname, "../public/exercise.html"))
});

module.exports = router;