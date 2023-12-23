import express from 'express'
import tasks from './routes/tasks.js'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'

dotenv.config()

const app =express();
const port = 3000;


app.use(express.static('./public'))

// middleware
app.use(express.json())



app.use('/api/v1/tasks', tasks)

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    }
    catch(error){
        console.log(error)
    }
}

start()