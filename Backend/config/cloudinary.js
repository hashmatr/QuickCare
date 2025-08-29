import {v2 as cloudinary} from 'cloudinary'

const connectCloudinary = async ()=> {
cloudinary.config({
    cloud_name  : process.env.CLOUDINARY_NAME,
    cloud_Api :   process.env.CLOUDINARY_API_KEY,
    Cloud_Secret_key : process.env.CLOUDINARY_API_SECRET
})}
export default connectCloudinary;