const axios = require("axios");

    const getCultureCollection = async (culture) => {
        const response = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/search?artistOrCulture=true&q=" + culture);
        const totalCultureData = await response.data;
        return totalCultureData;
    }

    const getSingleCultureArt = async (totalCultureData) => {
        const res = await axios.get("https://collectionapi.metmuseum.org/public/collection/v1/objects/" 
                    + totalCultureData.objectIDs[Math.floor(Math.random() * totalCultureData.total) + 1]);
            const singleCultureArt = await res.data;
            return singleCultureArt;
    }
    

    module.exports = {
        //@desc         Get Single Art by culture
        //@route        GET /api/art/:culture
        
        getArtsByCulture: async (req, res) => {
        try {
            const totalCultureData = await getCultureCollection(req.params.culture);
            const singleCultureArt = await getSingleCultureArt(totalCultureData);
            res.status(200).json(singleCultureArt)
            
        } catch (error) {
            console.log("Test error")
            res.status(400).json(error);
        }
    },
}
