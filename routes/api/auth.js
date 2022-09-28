var express = require('express');

var router = express.Router();

const jwt = require('jsonwebtoken');

var dbConn = require('../../config/db.js');



router.post('/signup', (req,res,next)=>{
    var custname = req.body.custname;
    var custuser = req.body.custuser;
    var custpass = req.body.custpass;
    var custage = req.body.custage;
    var custcontact = req.body.custcontact;
    var custaddress = req.body.custaddress;
    var custid = "";

    try {
sqlQuery = `INSERT INTO cust_tb(custname,custuser,custpass,custage,custcontact,custaddress)
 VALUES("${custname}","${custuser}","${custpass}","${custage}","${custcontact}","${custaddress}")`;
dbConn.query(sqlQuery, function(error, results){
    console.log(results.insertcustid);
    custid = results.insertcustid;
    res.status(200).json(
        {success:true, custid: custid}
    );

});
    }catch(error){
console.log(error);
return next(error);

    }

   
});

router.post('/login', (req,res,next)=>{
    var custuser = req.body.custuser;
    var custpass = req.body.custpass;

    try {
sqlQuery = `SELECT * FROM cust_tb WHERE custuser="${custuser}" AND custpass="${custpass}"`;
dbConn.query(sqlQuery, function(error, results){  
    console.log(results);
    Object.keys(results).forEach(function (key){
    var row = results[key]
    var custname = row.custname;
var custuser = row.custuser;
var data = {
    custname: row.custname,
    custuser: row.custuser
    };

    // Create Token
    token = jwt.sign(
       {data: data}, 
       'secretkeyhere',
       {expiresIn:'1h'}
    );
    res.status(200).json({success:true,token:token}); 
    });
});
    }catch(error){
console.log(error);
return next(error);

    }

   
});




module.exports = router;