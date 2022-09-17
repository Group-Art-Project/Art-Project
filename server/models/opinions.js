const mongoose = require('mongoose')

const OpinionSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: [true]
        },

        artist:{
            type: String, 
            required: [true]
        },

        timePeriod:{
                type: String, 
                required: [true]
        },

        region:{
            type: String, 
            required: [true]
        },

        imageURL:{
            type: String, 
            required: [true]
        },

        author:{
            type: String, 
            required: [true, "Please enter your name"]
        },

        email:{
            type: String, 
            required: [true, "Please enter your email address"]
        },

        opinion:{
            type: String, 
            required: [true, "Tell us what you think!"]
        },

        rating:{
            type: Integer, 
            minimum: 1,
            maximum: 10,
            required: [true, "Rate this piece"]
        },

    },
    {timestamps: true}
);

const Opinion = mongoose.model('Opinion', OpinionSchema)

module.exports = Opinion;