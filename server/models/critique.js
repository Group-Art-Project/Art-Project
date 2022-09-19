const mongoose = require('mongoose')

const CritiqueSchema = new mongoose.Schema(
    {
        title:{
            type: String,
        },
        artistDisplayName:{
            type: String,
        },
        culture:{
            type: String,
        },
        artistNationality:{
            type: String,
        },
        objectBeginDate:{
            type: String,
        },
        objectEndDate:{
            type: String,
        },
        primaryImage:{
            data: Buffer, 
            type: String
        },
    },
    {timestamps: true}
);

const Critique = mongoose.model('Critique', CritiqueSchema)

module.exports = Critique;