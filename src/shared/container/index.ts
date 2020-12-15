import { container } from 'tsyringe';

import ITodosRepository from '@modules/todos/repositories/ITodosRepository';
import TodosRepository from 'modules/todos/infra/typeorm/repositories/TodosRepository';

container.registerSingleton<ITodosRepository>(
  'TodosRepository',
  TodosRepository,
);
