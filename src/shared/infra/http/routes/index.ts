import { Router } from 'express';

import todosRouter from '@modules/todos/infra/http/routes/todos.routes';
import logRequests from '../middlewares/logRequests';

const routes = Router();

routes.use(logRequests);

routes.use('/todos', todosRouter);

// routes.use('/', (request, response) => response.json({ status: 'running' }));

export default routes;
