import { Router } from 'express';

import TodosController from '../controllers/TodosController';

// Rote deve: Receber a requisição, chamar outro arquivo, devolver uma resposta

const todosRouter = Router();
const todosController = new TodosController();

todosRouter.get('/', todosController.index);
todosRouter.post('/', todosController.create);

export default todosRouter;
