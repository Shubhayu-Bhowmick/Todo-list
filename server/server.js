import express from "express"
import cors from "cors"
import mongoose  from "mongoose"
//import Todo from "./model/taskModel.js"
import todoRoute from "./routes/todo.js"

const app = express()
const port = 3000

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use('/todo', todoRoute)



mongoose.connect('mongodb+srv://@cluster0.netr6i2.mongodb.net/?retryWrites=true&w=majority',
                  () => {console.log("connected to database...")} ).then(app.listen(port, () => {
                    console.log(`Example app listening on port ${port}`)
                  }))



                  
