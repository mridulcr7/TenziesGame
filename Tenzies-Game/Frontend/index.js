const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const cookieParser = require('cookie-parser');
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


const dbURI = "mongodb+srv://mridulpandey5277:mridulpandey@cluster0.gxshzyn.mongodb.net/assessment";


mongoose.connect(dbURI)
    .then(() => {
        console.log("Let's go")
        app.listen(4000);
    })
    .catch(err => {
        console.log("ERROR!!")
        console.log(err)
    })

app.use(routes);