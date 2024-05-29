const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;