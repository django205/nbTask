const express=require('express');
const router=express.Router();
    

        router.use('/chapter', require('../apis/chapter.api'));
module.exports=router;