import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './todo.dto/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Get()
  getAllTask() {
    return this.todoService.findAll();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.todoService.findById(id);
  }

  @Post()
  createTask(@Body() taskRequest: TodoDTO) {
    return this.todoService.create(taskRequest);
  }

  // @Put(':id')
  // updateTaskName(@Param('id') @Body('taskName') id: string, taskName: string) {
  //   return this.todoService.updateName(id, taskName);
  // }

  // @Delete(':id')
  // deleteTask(@Param('id') id: string): any {
  //   return this.todoService.remove(id);
  // }
}
