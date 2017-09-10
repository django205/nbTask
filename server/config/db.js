// const mongoose=require('mongoose');
// const con=mongoose.connect('mongodb://localhost:27017/nb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/nb";

const con=MongoClient.connect(url);
module.exports=con;