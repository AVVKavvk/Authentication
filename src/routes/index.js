const express=require('express');
const router=express.Router();

const v1API=require('./v1/index');

router.use('/v1',v1API);
module.exports=router;