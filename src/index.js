const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/route");
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const port = process.env.port || 3000; 

mongoose.connect("mongodb+srv://ffarrukh38:786Faizi@cluster0.xekgexh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" );

app.use(router);

app.get("/", (req, res) => { 
    res.send("<h1>It's Working!</h1>"); 
}); 

app.listen(port, () => {
    console.log("Server listening on Port", port);
});
