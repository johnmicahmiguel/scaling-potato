require('dotenv').config();
const express = require('express')
const app = express()
const mongoose = require('mongoose');
 
// mongoose.connect("mongodb://root:123409876@srv-captain--mongodb:27012/db", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
// .then(() => {console.log('MongoDB successfully connected!')}, err => {console.log('Something went wrong!')});

app.get('/', function (req, res) {
    res.status(200).send({'message': "Welcome to Biz Solutions API2222222"});
})
 
app.listen(process.env.PORT || 8080, ()=>{console.log("Server started!")});

