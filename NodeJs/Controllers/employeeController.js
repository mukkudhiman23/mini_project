
const express = require('express');
var router = express.Router();
var { Employee } = require('../Models/employee');
var ObjectId = require('mongoose').Types.ObjectId;
//for retriving the data
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Employees :' + JSON.stringify(err)); }
    });
});
//for insert the data
router.post('/', (req, res) => {
   var emp = new Employee({
    name:req.body.name,
    trade:req.body.trade,
    gender:req.body.gender,
    address:req.body.address,
    id_emp:req.body.id_emp,
    id_aadhar:req.body.id_aadhar,
    dob:req.body.dob
    });
    emp.save((err,docs)=>{
        if(!err){
            res.send(docs);
        }
        else{
            console.log("Error while inserting data:"+JSON.stringify(err));
        }
    });
}); 
//for get employee detail by id

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send("No Record with this id");
    }else{
        Employee.findById(req.params.id,(err,doc)=>{
            if(!err){
                res.send(doc);
            }else{
                console.log("Error ehile retriving data"+JSON.stringify(err));
            }
        });
    }

});

//for updating the record 
router.put('/',(req,res)=>{

console.log(req.params.id);

    if(!ObjectId.isValid(req.param.id)){
        return res.status(400).send("No Record with this id");
    }
    var emp ={
        name:req.body.name,
        trade:req.body.trade,
        gender:req.body.gender,
        address:req.body.address,
        id_emp:req.body.id_emp,
        id_aadhar:req.body.id_aadhar,
        dob:req.body.dob
        };
        Employee.findByIdAndUpdate(req.body.id,{$set:emp},{new:true},(err,doc)=>{
            if(!err){
                res.send(doc);
            }else{
                console.log("Error while updated data"+JSON.stringify(err));
            }
        });
});
//for deleting the record

router.delete('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send("No Record with this id");
    }
    Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Error while deleting data"+JSON.stringify(err));
        }
    })
});
module.exports = router;