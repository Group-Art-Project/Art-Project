const express = require("express");
const { getArtsByCulture } = require("../controllers/Arts.js");

const artRouter = express();


artRouter
    .route('/:culture')
    .get(getArtsByCulture)
   

// export default router;
module.exports = artRouter;