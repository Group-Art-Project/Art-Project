const axios = require("axios");

//@desc         Get Single Art by culture
//@route        GET /api/art/:culture

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


    exports.getArtsByCulture = async (req, res) => {
        try {
            const totalArtsData = await getArtsCollection(req.params.culture);
            const singleArt = await getSingleArt(totalArtsData);
            res.status(200).json(singleArt)
            
        } catch (error) {
            console.log("Test error")
            res.status(400).json(error);
        }
    };


// //@desc         Get pet by Id
// //@route        GET /api/pet/:id
// exports.getPetById = async (req, res, next) => {
//     try {
//         const pet = await Pet.findById(req.params._id);
//         res.status(200).json({
//             success: true,
//             data: pet
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error
//         });
//     }
// }

// //@desc         Create new Pet
// //@route        POST /api/pet 
// exports.createNewPet = async (req, res, next) => {
//     try {
//         console.log(req.body)
//         const pet = await Pet.create(req.body);
//         res.status(200).json({
//             success: true,
//             data: pet
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error
//         });
//     }
// }

// //@desc         Delete pet
// //@route        delete /api/pet/:id
// exports.deletePetById = async (req, res, next) => {
   
//     try { 
//         const pet = await Pet.deleteOne({ _id: req.params._id });
//         res.status(200).json({
//             success: true,
//             data: pet
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error
//         });
//     }
// }

// //@desc         update pet
// //@route        put /api/pet/:id
// exports.updatePetById = async (req, res, next) => {
//     try { 
//         const pet = await Pet.findOneAndUpdate({ _id: req.params._id }, req.body, {
//             new:true,
//             runValidators: true
//         });
//         res.status(200).json({
//             success: true,
//             data: pet
//         });
//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error
//         });
//     }
// }