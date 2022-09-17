const mongoose = require('mongoose');
 
mongoose.connect('mongodb://localhost:27017/opinions', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('SUCCESSFULLY CONNECTED TO DATABASE'))
    .catch(err => console.log('THERE WAS A PROBLEM CONNECTING TO THE DATABASE', err));