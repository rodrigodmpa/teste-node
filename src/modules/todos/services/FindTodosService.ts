import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Todo from '../infra/typeorm/entities/Todo';

import ITodosRepository from '../repositories/ITodosRepository';

@injectable()
class CreateTodoService {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository,
  ) {}

  public async execute(): Promise<Todo[] | undefined> {
    const todos = await this.todosRepository.findAll();
    return todos;
  }
}

export default CreateTodoService;
