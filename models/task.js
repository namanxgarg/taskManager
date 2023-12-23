import mongoose from "mongoose";

const taskSchema=new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
    },
    completed: {type:Boolean,
        default:false}
})

export default mongoose.model('Task', taskSchema)