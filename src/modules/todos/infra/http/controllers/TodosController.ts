import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateTodoService from '@modules/todos/services/CreateTodoService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, body, date } = request.body;

    const createTodo = container.resolve(CreateTodoService);

    const appointment = await createTodo.execute({
      title,
      body,
      date,
    });

    return response.json(appointment);
  }
}
