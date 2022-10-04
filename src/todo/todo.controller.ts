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

  @Put('name/:id')
  updateTaskName(@Param('id') id: string, @Body() taskName: TodoDTO) {
    return this.todoService.updateName(id, taskName);
  }

  @Put('status/:id')
  updateTaskStatus(@Param('id') id: string) {
    return this.todoService.updateStatus(id);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.todoService.remove(id);
  }
}
