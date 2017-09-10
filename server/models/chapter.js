
const mongoose=require('mongoose');

var Schema=mongoose.Schema;
var ObjectId=Schema.ObjectId;
const chapterSchema=new Schema({
    _id: { type: ObjectId, auto: true },
    title: { type: String},
    detail: { type: String},
});
module.exports=mongoose.model('chapters',chapterSchema);
