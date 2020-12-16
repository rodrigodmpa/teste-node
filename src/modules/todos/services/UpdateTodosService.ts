import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Todo from '../infra/typeorm/entities/Todo';

import ITodosRepository from '../repositories/ITodosRepository';

interface IRequest {
  title: string;
  body: string;
  date: Date;
}
@injectable()
class UpdateTodosService {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository,
  ) {}

  public async execute(
    id: string,
    { title, body, date }: IRequest,
  ): Promise<Todo> {
    const todo = await this.todosRepository.update(id, {
      title,
      body,
      date,
    });
    return todo;
  }
}

export default UpdateTodosService;
