import mongoose from "mongoose";
import Todo from "../model/taskModel.js";

export const readTodos = async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
}

export const createTodos = async (req, res) => {
    const todo = new Todo(req.body)
    await todo.save()    
    res.status(200).json(todo)
}

export const updateTodos = async (req, res) => {
    const todoId = req.params.id
    console.log(todoId)
    const task = req.body
    console.log(task)
    const todos = await Todo.findByIdAndUpdate(todoId,task,{new: true})
    res.status(200).json(todos)
}

export const deleteTodo = async (req, res) => {
    const todoId = req.params.id
    const todos = await Todo.findByIdAndRemove(todoId)
    res.status(200).json(todos)
}