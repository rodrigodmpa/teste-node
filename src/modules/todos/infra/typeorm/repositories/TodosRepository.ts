import { getRepository, Repository } from 'typeorm';
import ITodosRepository from 'modules/todos/repositories/ITodosRepository';
import ICreateTodoDTO from '@modules/todos/dtos/ICreateTodoDTO';
import IUpdateTodoDTO from '@modules/todos/dtos/IUpdateTodoDTO';
import Todo from '../entities/Todo';

class TodosRepository implements ITodosRepository {
  private ormRepository: Repository<Todo>;

  constructor() {
    this.ormRepository = getRepository(Todo);
  }

  public async findAll(): Promise<Todo[] | undefined> {
    const todos = await this.ormRepository.find();
    return todos;
  }

  public async create({ title, body, date }: ICreateTodoDTO): Promise<Todo> {
    const todo = this.ormRepository.create({ title, body, date });
    await this.ormRepository.save(todo);

    return todo;
  }
}

export default TodosRepository;
