const axios = require("axios");

    const getArtsCollection = async (culture) => {
        const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=" + culture);
        const totalArtsData = await response.data;
        return totalArtsData;
    }
    const getSingleArt = async (totalArtsData) => {
        const res = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" 
                    + totalArtsData.objectIDs[Math.floor(Math.random() * totalArtsData.total) + 1]);
            const singleArt = await res.data;
            return singleArt;
    }

    module.exports = {
        //@desc         Get Single Art by culture
        //@route        GET /api/art/:culture
        getArtsByCulture: async (req, res) => {
        try {
            const totalArtsData = await getArtsCollection(req.params.culture);
            const singleArt = await getSingleArt(totalArtsData);
            res.status(200).json(singleArt)
            
        } catch (error) {
            console.log("Test error")
            res.status(400).json(error);
        }
    }
}
