require("dotenv").config();
// ---------> allows .env

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const usersController = require('./controllers/usersController');

// Middleware
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth')

// -> Recieving requests on cross-origins **
const cors = require("cors");

// Express doesn't naturally convert our data to json
app.use(express.urlencoded());
app.use(express.json());

app.use(cors());

// This pulls our Mongoose connection into application
const connectToDb = require("./config/connectToDb");
// This initializes our connectToDb() function
connectToDb();

// ---------------------------------- Middleware

// New logging middleware to help us keep track of
// requests during testing!
app.use((req, res, next) => {
    const time = new Date();

    console.log(
        `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    if (Object.keys(req.body).length > 0) {
        console.log("Containing the data:");
        console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

// Routing --> Remember to test in Postman
// -----------------------------------------------

app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.post('/logout', usersController.logout);
app.get('/check-auth',requireAuth ,usersController.checkAuth);

app.get("/", (req, res) => {
    res.send("This is the Landing Page.")
});

// ---------------------------------- Server
app.listen(PORT, () => {
    console.log(`Express Server Listening on Port num: ${PORT}`);
});