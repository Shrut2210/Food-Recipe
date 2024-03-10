const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
        _id : mongoose.ObjectId,
        Srno : Number,
        RecipeName : String,
        TranslatedRecipeName : String,
        Ingredients : String,
        TranslatedIngredients : String,
        PrepTimeInMins : Number,
        CookTimeInMins : Number,
        TotalTimeInMins : Number,
        Servings : Number,
        Cuisine : String,
        Course : String,
        Diet : String,
        Instructions : String,
        TranslatedInstructions : String,
        URL : String
    }
);

module.exports = mongoose.model('Food', schema);