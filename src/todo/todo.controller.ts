import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto/todo.dto';
import { toEntity } from './mapper/DTOtoEntity';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Post()
  createTask(@Body() taskRequest: TodoDTO) {
    return this.todoService.create(toEntity(taskRequest));
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): any {
    return this.todoService.remove(id);
  }
}
