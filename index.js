require("dotenv").config()
const express = require('express');
const bodyParser = require("body-parser");
require('./models/db');
const admissionController = require('./controller/admissionFormApi');
const registerController = require('./controller/registerApi');
const app = express();
app.use(bodyParser.json())

const port = process.env.PORT ||5001;
app.use('/',registerController)
app.use('/admission', admissionController);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});