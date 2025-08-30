import express from 'express'
import {addDoctor,loginAdmin} from '../controllers/adminController.js'
import upload from '../middleware/multer.js'
import AuthAdmin from '../middleware/AuthAdmin.js';


const adminRouter = express.Router()

adminRouter.post('/add-doctor',AuthAdmin,upload.single('image'),addDoctor);
adminRouter.post('/login',loginAdmin);

export default adminRouter 