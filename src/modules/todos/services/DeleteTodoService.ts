import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Todo from '../infra/typeorm/entities/Todo';

import ITodosRepository from '../repositories/ITodosRepository';

@injectable()
class DeleteTodoService {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository,
  ) {}

  public async execute(id: string): Promise<boolean | undefined> {
    const todos = await this.todosRepository.delete(id);
    return todos;
  }
}

export default DeleteTodoService;
