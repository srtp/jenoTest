require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();

// const urlPhoto = `maps.googleapis.com/maps/api/place/photo?maxwidth=400
// &photo_reference=${url}&key=${apiKey}`
router.get("/restaurants", async (req, res, next) => {
  try {
    const key = process.env.API_KEY;
    const city = "chonburi+tungsukla";
    const category = "foods";
    const {
      data: { results },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${city}&type=restaurant&key=${key}`
    );

    res.json(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
