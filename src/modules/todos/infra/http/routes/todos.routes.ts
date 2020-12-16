import { Router } from 'express';

import TodosController from '../controllers/TodosController';

const todosRouter = Router();
const todosController = new TodosController();

todosRouter.get('/', todosController.index);
todosRouter.post('/', todosController.create);
todosRouter.put('/:id', todosController.update);

export default todosRouter;
