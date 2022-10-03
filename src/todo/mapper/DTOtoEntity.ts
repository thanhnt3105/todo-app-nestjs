import { TodoEntity } from '../entity/todo.entity';
import { TodoDTO } from '../todo.dto/todo.dto';

export function toEntity(todoRequest: TodoDTO): TodoEntity {
  const todoEntity = new TodoEntity();
  todoEntity.taskName = todoRequest.taskName;
  return todoEntity;
}
