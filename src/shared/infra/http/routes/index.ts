import { Router } from 'express';

import logRequests from '../middlewares/logRequests';

const routes = Router();

routes.use(logRequests);

// routes.use('/', (request, response) => response.json({ status: 'running' }));

export default routes;
