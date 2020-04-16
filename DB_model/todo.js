const mongoose = require('mongoose');
const schema = mongoose.Schema;

const toDo = new schema({
    data : String,
    status : Boolean
});

//create model/table
const raitoDo = mongoose.model('raitoDo' , toDo);

module.exports = raitoDo;
