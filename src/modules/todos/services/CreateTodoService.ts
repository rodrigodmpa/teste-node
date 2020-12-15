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
class CreateAppointmentService {
  constructor(
    @inject('TodosRepository')
    private todosRepository: ITodosRepository,
  ) {}

  public async execute({ title, body, date }: IRequest): Promise<Todo> {
    const todo = await this.todosRepository.create({
      title,
      body,
      date,
    });
    return todo;
  }
}

export default CreateAppointmentService;
