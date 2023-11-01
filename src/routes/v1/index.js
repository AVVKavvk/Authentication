const express=require('express');
const router=express.Router();

const userController=require('../../controllers/user-controller');

router.post('/user',userController.create);
router.delete('/user/:id',userController.destroy);
router.get('/user/:id',userController.get);
module.exports=router;