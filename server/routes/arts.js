const ArtController = require("../controllers/Arts.js");

module.exports = (app) => {
    app.get('/api/art/:culture', ArtController.getArtsByCulture);
    app.post('/api/art/critique', ArtController.createOpinion);
}