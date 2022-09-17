const express = require("express");
const artroute = require("./routes/arts.js");
const cors = require("cors");
const app = express();

app.use(express.json(), express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:5000',
    }
))

require('./config/mongoose.config');
require('./routes/arts')(app);


app.listen(5000 ,
    console.log(`Server running on port 5000`));