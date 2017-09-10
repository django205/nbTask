const express=require('express');
const chapter=require('../models/chapter');

const router=express.Router();

router.get('/',(req,res)=>{
    chapter.find().then((docs)=>{
        res.status(200).json(docs);
    }).catch((err)=>{
        res.status(500).send('Internal Server Error');
    });
});

router.get('/:id',(req,res)=>{
    let id=req.params.id;
    chapter.findById(id).then((doc)=>{
        res.status(200).json(doc);
    }).catch((err)=>{
        res.status(500).send('Internal Server Error');
    });
});

router.post('/',(req,res)=>{
    const body=req.body;
    const obj=new chapter(body);
    obj.save().then(()=>{
        res.status(200).send('success');
    }).catch((err)=>{
        res.status(500).send('Internal Server Error');
    })
});

router.put('/:id',(req,res)=>{
    let body=req.body;
    let id=req.params.id;
 
        chapter.findByIdAndUpdate(id, { title: body.title, detail: body.detail}).then(() => {
            res.status(200).send('updated');
        }).catch((err) => {
            res.status(500).send('Internal Server Error');
        }); 
});

router.delete('/:id',(req,res)=>{
     id=req.params.id;
     chapter.findByIdAndRemove(id).then(()=>{
         res.status(200).send('deleted');
     }).catch((err)=>{
         res.status(500).send('Internal Server Error');
     });
});

module.exports=router;