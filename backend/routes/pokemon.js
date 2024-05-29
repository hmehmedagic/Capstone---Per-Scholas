const express = require("express");
const router = express.Router();
const pokemonController = require("../controllers/pokemonController");

router
    .route("/")
    .post(pokemonController.addPokemon)

router
    .route("/:userId")
    .get(pokemonController.fetchPokemon)
    .put(pokemonController.updatePokemon)
    .delete(pokemonController.deletePokemon);

module.exports = router;