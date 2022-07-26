const express = require('express');
//const cors = require('cors');
const mysql = require('mysql');
//const { application } = require('express');
//const axios =require('axios');
const app = express();


//connecting to the database and checking for errors if any are present

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Password',
    database: 'reactProj'
});


db.connect(function(err) {
    if (err) throw err;
    console.log("MySQL Connected!");


    // db.query("SELECT * FROM products", function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result); //tables and prodcuts appear
    // });
    
    app.get('/api/Product', (req, res) => {
        db.query("SELECT * FROM products;", function (err, results, fields) {
            if (err) throw err;
            res.send(results);
        });
    });


});
