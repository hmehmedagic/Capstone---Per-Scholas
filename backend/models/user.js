// Models are a representation of our data.
// Schema: we create a blueprint for the model so we can export that format to our express server and eventually link it to our routes.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    userName: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        index:true
      },
      password: {
        type: String,
        required:true
      },   
});

const User = mongoose.model("User", userSchema);

module.exports = User;