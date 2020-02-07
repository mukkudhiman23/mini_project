const mongoose = require('../db');

var Employee = mongoose.model('Employee',{
    id_emp: {type:Number},
    name:{type:String},
    trade:{type:String},
    id_aadhar:{type:Number},
    gender:{type:String},
    address:{type:String},
    dob:{type:Date},


});
module.exports={Employee};



