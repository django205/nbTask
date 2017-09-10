const express=require('express'),
        bodyParser=require('body-parser'),
        mongoose=require('mongoose'),
        apiroutes=require('./server/routes/apiroutes');

mongoose.connect('mongodb://localhost:27017/nb');


const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/api',apiroutes);
app.listen(3000, function() {
    console.log('Server is running at http://localhost:3000');
});

