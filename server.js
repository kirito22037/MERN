const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/todo-routes');


const app = express();



//middle ware
app.use(bodyParser.json());
app.use('/todo' , routes);




//connect to mongodb
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
mongoose.connect('mongodb://localhost/todo' , 
                    option ,
                    ()=>{
                        console.log("DB connected");
                        app.listen(3003 , ()=>{console.log("REST API active at 3003");});
}); //'todo' is db name
mongoose.Promise = global.Promise;

