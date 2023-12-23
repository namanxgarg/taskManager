import Task from '../models/task.js'


const getAllTasks = async (req, res)=>{

    try{
        const tasks=await Task.find({})
        res.status(200).json({tasks})
    }catch(error){
        res.status(500).json({msg: error})
    }
    // res.send('all items')
}

const createTask = async (req, res)=>{
    // res.send('task created')
    try{
        const task=await Task.create(req.body)
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg: error})
    }
}

const getTask = async (req, res)=>{
    // res.send('get single task')
    try{
        const task = await Task.findOne({ _id: req.params.id })
        if(!task){
            res.status(404).json({msg: `No task with id ${req.params.id}`})
        }
        res.status(200).json({task})
    }catch(error){
        return res.status(500).json({msg: error})
    }
    res.json({id: req.params.id})
}

const updateTask = async (req, res)=>{
    try{
        // const {id: taskID} = req.params
        const task =  await Task.findOneAndUpdate({_id: req.params.id},req.body,{
            new: true,
            runValidators: true
        })
        if(!task){
            return res.status(404).json({msg: `No task with id ${req.params.id}`})
        }
        res.status(200).json({task})
    }catch(error){
        return res.status(500).json({msg: error})
    }
    // res.send('update task')
}

const deleteTask = async (req, res)=>{
    try{
        const task=await Task.findOneAndDelete({_id: req.params.id})
        res.status(200).json({task})
    }catch(error){
        return res.status(500).json({msg: error})       
    }// res.send('delete task')
}

export {getAllTasks, createTask, getTask, updateTask, deleteTask}