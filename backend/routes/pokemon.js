const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router
    .route("/")
    .post(pokemonController.addPokemon)
    .put(pokemonController.updatePokemon)

router
    .route("/:userId")
    .get(pokemonController.fetchPokemon)
    .delete(pokemonController.deletePokemon);

module.exports = router;