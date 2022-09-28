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
    
    

var carid = req.body.carid;
var custid = req.body.custid;
var daterent = req.body.daterent;
var datereturn = req.body.datereturn;
var rentprice = req.body.rentprice;

sqlQuery = `INSERT INTO rental_tb (carid,custid,daterent,datereturn,rentprice)
VALUES(${carid},${custid},"${daterent}","${datereturn}","${rentprice}")`;

dbConn.query(sqlQuery, function(error,results,fields) {
if (error) throw error;
res.status(200).json(results);

});


});

module.exports = router;