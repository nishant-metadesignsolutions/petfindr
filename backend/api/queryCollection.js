const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router();

const mongoose = require('mongoose');
const {ObjectId} = require('mongodb');

const Query = require('../models/queryModel');

router.post('/api/newQuery', async (req,res) => {
    const newQuery = new Query(req.body);
    try{
        const queryRegistered = await newQuery.save();
        if(queryRegistered){
            res.send(`Your request has been saved}`)
        }
    } catch(err){
        res.send("Failed to register request")
    }  

});

router.get('/api/queryInfo', async (req,res) => {
    try{
        const id = new ObjectId(req.query.id);
        const queryInfo = await Query.findOne({_id: id});
        
        if(queryInfo){
            res.send(queryInfo);
        } else {
            res.send('No such data');
        }
    } catch(err){
        res.send(err);
    }
    
});


module.exports = router;