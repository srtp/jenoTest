require("dotenv").config();
const axios = require("axios");
const router = require("express").Router();

// const urlPhoto = `maps.googleapis.com/maps/api/place/photo?maxwidth=400
// &photo_reference=${url}&key=${apiKey}`
router.get("/photo", async (req, res, next) => {
  try {
    const key = process.env.API_KEY;
    const neighborhood = "chelsea";
    const borough = "manhattan";
    const city = "new+york+city";
    const category = "Thaifoods";
    const {
      data: { results },
    } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
    );
    let thePhoto = [];
    for (let index in results) {
      const photos = results[index]["photos"];
      for (let photo in photos) {
        let photo_reference = photos[photo]["photo_reference"];
        // thePhoto["photo_ref" + index] = photo_reference;
        thePhoto.push({photo_reference});
      }
    }
    // console.log(thePhoto);
    res.json(thePhoto);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
