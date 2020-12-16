import Todo from '../infra/typeorm/entities/Todo';
import ICreateTodoDTO from '../dtos/ICreateTodoDTO';
import IUpdateTodoDTO from '../dtos/IUpdateTodoDTO';

export default interface ITodosRepository {
  findAll(): Promise<Todo[] | undefined>;
  // findById(id: string): Promise<Todo | undefined>;
  create(data: ICreateTodoDTO): Promise<Todo>;
  update(id: string, data: IUpdateTodoDTO): Promise<Todo>;
  // delete(id: string): Promise<Todo>;
}
