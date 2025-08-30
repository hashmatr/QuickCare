import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'
import jwt from 'jsonwebtoken'
const addDoctor = async (req,res) => {
    try {
        const {name,email,password,speciality,degree,experience,about,fees,address} = req.body
       const imageFile = req.file
       if(!name||!email||!password||!speciality||!degree||!experience||!about||!fees||!address){
            return res.json({
                success:"false",
                message:"Missing information"
            })
       }
       if(!validator.isEmail(email)){
             return res.json({
                success:"false",
                message:"Please enter a valid email"
            })
       }
       if(password.length < 8){
        return res.json({
                success:"false",
                message:"Please enter a valid password"
            })
       }
       const salt = await bcrypt.genSalt(10);
       const hashpassword = await bcrypt.hash(password.toString(),salt)
       const imageupload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
       const imageURL = imageupload.secure_url

        const doctorData = {
        name,
        email,
        password:hashpassword,
        image:imageURL,
        speciality,
        degree,
        experience,
        about,
        fees,
        address:JSON.parse(address),
        Date:Date.now(),
    }
    const newDoctor = new doctorModel(doctorData)
    await newDoctor.save()
    res.json({
        success:true,
        message:'doctor added'
    })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}
const loginAdmin = async (req,res) =>{
try {
        const {email,password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }
        else {
            res.json({success:false},{message:"Invalid Credentials"})
        } 
} catch (error) {
    console.log(error);
        res.json({
            success:false,
            message:error.message
        })
}
}
export {addDoctor,loginAdmin}