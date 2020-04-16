const express = require('express');
const router = express.Router();
const raitoDo = require('../DB_model/todo');


//handling requests
router.get('/all' , (req,res)=>{

    raitoDo.find({} ,(err ,data)=>{
        console.log("all data : ",data);
        res.send(data);
    });
});

router.post('/new',(req , res)=>{
    console.log(req.body);
       let doc = new raitoDo(req.body);
    doc.save()
    .then(()=>{
        res.send({
            id : doc._id,
            ...req.body
        });
    })
    .catch((err)=>{
        console.log(err);
    }) 
    //res.send('recieved post data');
});


router.put('/update/:id',async (req , res)=>{
    const inst =await raitoDo.findById({_id : req.params.id});
    inst.status = !inst.status;
    await inst.save();
    await res.send(inst);   
});


router.delete('/delete/:id' ,(req,res)=>{
    raitoDo.findByIdAndRemove({_id : req.params.id})
    .then((deleted)=>{
        res.send(deleted);
    });
});

module.exports = router;