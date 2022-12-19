import { readTodos, createTodos, deleteTodo, updateTodos } from "../controller/todo.js";
import express from "express";

const router = express.Router();

router.get('/', readTodos);

router.post('/', createTodos)

router.delete('/:id', deleteTodo)
router.patch('/:id', updateTodos)

export default router
