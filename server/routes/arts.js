const ArtController = require("../controllers/Arts.js");

module.exports = (app) => {
    app.get('/api/art/:culture', ArtController.getArtsByCulture);
    app.get('/api/art/critique/:id', ArtController.getOneOpinion)
    app.post('/api/art/critique', ArtController.createOpinion);
    app.delete('/api/art/critique/:id', ArtController.deleteOpinion);
}