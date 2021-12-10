import express from 'express';
const router =  express.Router();
import userController from '../controllers/userController.js';


router.get('/index', userController.home)
router.get('/login', userController.login)
router.get('/registration', userController.register)
router.post('/registration', userController.createDoc)
router.post('/login', userController.readDoc)




export default router;