import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true
        }
    }
)

const Todo = mongoose.model('Todo', TodoSchema)

export default Todo