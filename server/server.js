const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config({path:path.join(__dirname,'./.env')});


//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ROUTES
app.use("/",require("./routes/poll"));

const PORT = process.env.PORT||4000;
app.listen(PORT, console.log(`Server started on port ${PORT} `));