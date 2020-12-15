import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTodoService from '@modules/todos/services/CreateTodoService';
import FindTodosService from '@modules/todos/services/FindTodosService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, body, date } = request.body;

    const createTodo = container.resolve(CreateTodoService);

    const todo = await createTodo.execute({
      title,
      body,
      date,
    });

    return response.json(todo);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const findAll = container.resolve(FindTodosService);

    const todos = await findAll.execute();

    return response.json(todos);
  }
}
