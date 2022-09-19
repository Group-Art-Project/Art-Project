const mongoose = require('mongoose')

const OpinionSchema = new mongoose.Schema(
    {
        title:{
            type: String,
        },

        artistDisplayName:{
            type: String, 
        },

        objectBeginDate:{
                type: String, 
        },

        objectEndDate:{
            type: String, 
        },

        objectName:{
            type: String, 
        },

        culture:{
            type: String, 
        },

        artistNationality:{
            type: String, 
        },

        creditLine:{
            type: String, 
        },

        primaryImage:{
            type: String, 
        },

        author:{
            type: String, 
            required: [true, "Please enter your name"]
        },

        email:{
            type: String, 
            required: [true, "Please enter your email address"]
        },

        opinionContent:{
            type: String, 
            required: [true, "Tell us what you think!"]
        },

        rating:{
            type: Number, 
            minimum: 1,
            maximum: 10,
            required: [true, "Rate this piece"]
        },

    },
    {timestamps: true}
);

const Opinion = mongoose.model('Opinion', OpinionSchema)

module.exports = Opinion;