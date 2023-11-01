const express=require('express');
const router=express.Router();

const userController=require('../../controllers/user-controller');

router.post('/signup',userController.create);
router.delete('/user/:id',userController.destroy);
router.get('/user/:id',userController.get);
router.post('/signin',userController.signIn);
module.exports=router;