const express = require("express");
const artroute = require("./routes/arts.js");
const cors = require("cors");

require("./config/mongoose.config");

const app = express();
app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors())
app.use('/api/art',artroute);


app.listen(5000 ,
    console.log(`Server running on port 5000`));