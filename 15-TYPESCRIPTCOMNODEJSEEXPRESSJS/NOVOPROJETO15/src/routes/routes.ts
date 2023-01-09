import { Router } from 'express';

import { getTodo, getTodos, deleteTodo, editTodo, addTodo} from '../controllers/todos';

const router = Router();

router.get('/', getTodos);

router.post('/', addTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', editTodo);




// module.exports = router; //sintaxe que não funcionará...




export default router; //sintaxe que funciona...