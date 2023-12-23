import mongoose from "mongoose"


const connectDB=(url)=>{
    return mongoose.connect(url)
}

// .then(()=>{
//     console.log("connected to database")
// }).catch((err)=>{
//     console.log(err)
// })

export default connectDB