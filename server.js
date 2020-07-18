const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(bodyParser.json());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
