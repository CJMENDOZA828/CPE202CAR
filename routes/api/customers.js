var express = require('express');
const jwt = require('jsonwebtoken');

var router = express.Router();

var dbConn = require('../../config/db.js');


//INSERT 
router.post('/add',(req,res)=>{
    const token = req.headers.authorization.split(' ')[1];
    
    if (!token){
    res.status(200).json({success: false, msg: 'Error, Token was not found'});
    }
    
    const decodedToken = jwt.verify(token,'secretkeyhere');
    
    console.log(decodedToken);
    

var custname = req.body.custname;
var custage = req.body.custage;
var custcontact = req.body.custcontact;
var custaddress = req.body.custaddress;

sqlQuery = `INSERT INTO cust_tb (custname,custage,custcontact,custaddress)
VALUES("${custname}","${custage}","${custcontact}","${custaddress}")`;

dbConn.query(sqlQuery, function(error,results,fields) {
if (error) throw error;
res.status(200).json(results);

});


});

module.exports = router;
