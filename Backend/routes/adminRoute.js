import express from 'express'
import { addDoctor } from '../controllers/adminController'
import upload from '../middleware/multer'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',upload.single('image'),addDoctor);
export default adminRouter