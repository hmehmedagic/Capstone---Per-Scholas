const Pokemon = require("../models/pokemon");

const fetchPokemon = async (req, res) => {
    const userId = req.params.userId;
    // console.log("id: " + userId + " :id");

    const pokemon = await Pokemon.findOne({userId});

    // console.log("pokemon: " + pokemon.name + " :pokemon");

    if (!pokemon) {
        return res.status(401).send('User has not yet selected a pokemon. Please make a selection.');
    }

    res.status(200).json(pokemon.name);
}

const addPokemon = async (req, res) => {
    const { userId, name } = req.body;
    console.log('in req: ' + JSON.stringify(req.body, null, 2) + ' :in req');
    console.log(userId);
    console.log(name);
    try {
        const pokemon = await Pokemon.create({
            userId,
            name,
        });
        res.status(200).json({ message: "Pokemon successfully stored.", pokemon });
    } catch (error) {
        console.error('Error adding Pokemon:', error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const updatePokemon = async (req, res) => {
    const { userId, name } = req.body;

    await Pokemon.findOneAndUpdate({ userId }, { name });

    res.status(200).send('Pokemon successfully changed.');
}

const deletePokemon = async (req, res) => {
    const { userId } = req.body;

    await Pokemon.deleteOne({ userId });

    res.status(200).send('Pokemon removed from party.');
}

module.exports = {
    fetchPokemon,
    addPokemon,
    updatePokemon,
    deletePokemon
}